from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView,)
from .views import RegisterView, ForgotPasswordView ,ResetPasswordView, UserViewSet

router = DefaultRouter()
router.register(r"users", UserViewSet, basename="users")

urlpatterns = [
    # Authentication
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", TokenObtainPairView.as_view(), name="login"),
    path("refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    
    # Password Reset
    path("forgot-password/", ForgotPasswordView.as_view(), name="forgot-password",),
    path("reset-password/<uidb64>/<token>/", ResetPasswordView.as_view(), name="reset-password",),
    
    # User APIs (Profile, Owner Approval, etc.)
    path("", include(router.urls)),
]