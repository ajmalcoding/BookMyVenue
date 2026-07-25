from accounts.permissions import IsOwner
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import (Venue, Amenity, VenueImage,)
from .serializers import (VenueSerializer, AmenitySerializer, VenueImageSerializer,)
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

from .filters import VenueFilter

# ViewSet for managing venues
class VenueViewSet(ModelViewSet):
    serializer_class = VenueSerializer
    lookup_field = "slug"
    parser_classes = (MultiPartParser, FormParser, JSONParser,)
    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    filterset_class = VenueFilter

    search_fields = [
        "name",
        "description",
        "category",
        "city",
        "location",
    ]

    ordering_fields = [
        "price_per_hour",
        "capacity",
        "created_at",
    ]

    ordering = ["-created_at"]

    def get_permissions(self):
        if self.action in ["create", "update", "partial_update", "destroy"]:
            return [IsOwner()]
        return [IsAuthenticatedOrReadOnly()]

    def get_queryset(self):
        if self.action in ["partial_update", "update", "destroy", "my_venues"]:
            return Venue.objects.filter(owner=self.request.user)

        return Venue.objects.filter(status="approved")

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    @action(detail=False, methods=["get"], url_path="my")
    def my_venues(self, request):
        venues = Venue.objects.filter(owner=request.user)

        serializer = self.get_serializer(
            venues,
            many=True,
        )

        return Response(serializer.data)

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