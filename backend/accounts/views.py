from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth import get_user_model
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from .serializers import RegisterSerializer, UserSerializer, ChangePasswordSerializer
from .models import User
from .permissions import IsAdmin

# View for user registration
class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

# ViewSet for user management
class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=["post"], permission_classes=[IsAuthenticated],)
    def apply_owner(self, request):
        user = request.user

        if user.role == User.Role.OWNER:
            return Response(
                {"message": "You are already an owner."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if user.owner_status == User.OwnerStatus.PENDING:
            return Response(
                {"message": "Your application is already pending."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        
        user.owner_status = User.OwnerStatus.PENDING
        user.save()

        return Response(
            {"message": "Owner application submitted successfully."},
            status=status.HTTP_200_OK,
        )

    @action(detail=True, methods=["post"], permission_classes=[IsAdmin],)
    def approve_owner(self, request, pk=None):
        user = self.get_object()

        user.role = User.Role.OWNER
        user.owner_status = User.OwnerStatus.APPROVED
        user.save()

        return Response(
            {"message": "Owner approved successfully."},
            status=status.HTTP_200_OK,
        )

    @action(
        detail=True,
        methods=["post"],
        permission_classes=[IsAdmin],
    )
    def reject_owner(self, request, pk=None):

        user = self.get_object()

        user.owner_status = User.OwnerStatus.REJECTED
        user.save()

        return Response(
            {"message": "Owner request rejected."},
            status=status.HTTP_200_OK,
        )

# View for changing password
class ChangePasswordView(GenericAPIView):
    serializer_class = ChangePasswordSerializer
    permission_classes = [IsAuthenticated]

from .serializers import (
    ForgotPasswordSerializer,
    ResetPasswordSerializer,
)

User = get_user_model()

# View for handling forgot password requests
class ForgotPasswordView(GenericAPIView):
    serializer_class = ForgotPasswordSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data["email"]

        try:
            user = User.objects.get(email=email)

            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))

            return Response({
                "uid": uid,
                "token": token
            })

        except User.DoesNotExist:
            return Response(
                {"message": "User not found"},
                status=status.HTTP_404_NOT_FOUND
            )

# View for handling password reset requests
class ResetPasswordView(GenericAPIView):
    serializer_class = ResetPasswordSerializer

    def post(self, request, uidb64, token):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = User.objects.get(pk=uid)

        except Exception:
            return Response(
                {"message": "Invalid link"},
                status=status.HTTP_400_BAD_REQUEST
            )

        if not default_token_generator.check_token(user, token):
            return Response(
                {"message": "Invalid token"},
                status=status.HTTP_400_BAD_REQUEST
            )

        user.set_password(serializer.validated_data["password"])
        user.save()

        return Response(
            {"message": "Password changed successfully"}
        )

# View for retrieving and updating user profile
class ProfileView(RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user