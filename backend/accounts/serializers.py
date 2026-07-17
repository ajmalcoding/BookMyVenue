from rest_framework import serializers
from .models import User
from django.contrib.auth.password_validation import validate_password

# Serializer for user registration
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "password",
            "role",
        ]
        read_only_fields = ["id"]

    def validate_email(self, value):
        if value != value.lower():
            raise serializers.ValidationError(
                "Email must contain only lowercase letters."
            )
        return value

    def create(self, validated_data):
        validated_data.pop("role", None)

        user = User.objects.create_user(
            username=validated_data["username"],
            first_name=validated_data["first_name"],
            last_name=validated_data.get("last_name", ""),
            email=validated_data["email"],
            password=validated_data["password"],
        )

        user.role = User.Role.CUSTOMER
        user.owner_status = User.OwnerStatus.NONE
        user.save()

        return user

# Serializer for Venue owner application
class OwnerApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "owner_status",
        ]
        read_only_fields = [
            "owner_status",
        ]

# Serializer for changing password
class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField()
    new_password = serializers.CharField()

# Serializer for forgot and reset password
class ForgotPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()

class ResetPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        write_only=True,
        validators=[validate_password]
    )

# Serializer for user profile
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "role",
            "owner_status",
        ]
        read_only_fields = [
            "id",
            "email",
            "role",
            "owner_status",
        ]