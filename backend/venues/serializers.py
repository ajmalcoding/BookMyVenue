from rest_framework import serializers

from .models import (
    Venue,
    VenueImage,
    Amenity,
    VenueCapacity,
)

# Serializer for amenities
class AmenitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Amenity
        fields = [
            "id",
            "name",
            "icon",
        ]

# Serializer for venue images
class VenueImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = VenueImage
        fields = [
            "id",
            "image",
            "is_primary",
        ]

# Serializer for venue capacities
class VenueCapacitySerializer(serializers.ModelSerializer):
    class Meta:
        model = VenueCapacity
        fields = [
            "id",
            "layout",
            "capacity",
        ]

# Serializer for venues
class VenueSerializer(serializers.ModelSerializer):
    amenities = serializers.PrimaryKeyRelatedField(
        queryset=Amenity.objects.all(),
        many=True,
        required=False,
    )

    images = VenueImageSerializer(
        many=True,
        read_only=True
    )

    layouts = VenueCapacitySerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Venue

        fields = "__all__"

        read_only_fields = [
            "id",
            "owner",
            "slug",
            "status",
            "is_featured",
            "created_at",
            "updated_at",
        ]

    def create(self, validated_data):
        request = self.context["request"]

        amenities = validated_data.pop("amenities", [])

        venue = Venue.objects.create(**validated_data)

        venue.amenities.set(amenities)

        for image in request.FILES.getlist("uploaded_images"):
            VenueImage.objects.create(
                venue=venue,
                image=image,
            )

        return venue

    def update(self, instance, validated_data):
        request = self.context["request"]

        amenities = validated_data.pop("amenities", None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()

        if amenities is not None:
            instance.amenities.set(amenities)

        for image in request.FILES.getlist("uploaded_images"):
            VenueImage.objects.create(
                venue=instance,
                image=image,
            )

        return instance