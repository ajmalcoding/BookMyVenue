from rest_framework import serializers

from .models import (
    Venue,
    VenueImage,
    Amenity,
    VenueCapacity,
    Review,
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
class ReviewSerializer(serializers.ModelSerializer):

    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Review
        fields = [
            "id",
            "user",
            "rating",
            "comment",
            "created_at",
        ]                

# Serializer for venues
class VenueSerializer(serializers.ModelSerializer):
    amenities = AmenitySerializer(
        many=True,
        read_only=True
    )

    images = VenueImageSerializer(
        many=True,
        read_only=True
    )

    layouts = VenueCapacitySerializer(
        many=True,
        read_only=True
    )
    reviews = ReviewSerializer(many=True, read_only=True)

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
