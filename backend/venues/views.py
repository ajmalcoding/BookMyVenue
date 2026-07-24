from accounts.permissions import IsOwner
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly,IsAuthenticated
from .models import (Venue, Amenity, VenueImage,Review)
from .serializers import (VenueSerializer, AmenitySerializer, VenueImageSerializer, ReviewSerializer , )

# ViewSet for managing venues
class VenueViewSet(ModelViewSet):
    serializer_class = VenueSerializer
    lookup_field = "slug"

    def get_permissions(self):
        if self.action in ["create", "update", "partial_update", "destroy"]:
            return [IsOwner()]
        return [IsAuthenticatedOrReadOnly()]

    def get_queryset(self):
        return Venue.objects.filter(status="approved")

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

# ViewSet for managing amenities
class AmenityViewSet(ModelViewSet):
    queryset = Amenity.objects.all()
    serializer_class = AmenitySerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwner]

# ViewSet for managing venue images
class VenueImageViewSet(ModelViewSet):
    serializer_class = VenueImageSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwner]

    def get_queryset(self):
        return VenueImage.objects.all()

    def perform_create(self, serializer):
        venue_id = self.request.data.get("venue")
        serializer.save(venue_id=venue_id)

class ReviewViewSet(ModelViewSet):
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        venue = Venue.objects.get(slug=self.kwargs["venue_slug"])
        return Review.objects.filter(venue=venue)

    def perform_create(self, serializer):
        venue = Venue.objects.get(slug=self.kwargs["venue_slug"])

        serializer.save(
            user=self.request.user,
            venue=venue,
        )