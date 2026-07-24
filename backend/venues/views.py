from accounts.permissions import IsOwner
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from .models import (Venue, Amenity, VenueImage,)
from .serializers import (VenueSerializer, AmenitySerializer, VenueImageSerializer,)

# ViewSet for managing venues
class VenueViewSet(ModelViewSet):
    serializer_class = VenueSerializer
    lookup_field = "slug"
    parser_classes = (MultiPartParser, FormParser, JSONParser,)

    def get_permissions(self):
        if self.action in ["create", "update", "partial_update", "destroy"]:
            return [IsOwner()]
        return [IsAuthenticatedOrReadOnly(), IsOwner]

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