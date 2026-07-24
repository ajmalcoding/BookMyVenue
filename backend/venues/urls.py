from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (VenueViewSet, AmenityViewSet, VenueImageViewSet,ReviewViewSet)


router = DefaultRouter()

router.register("venues", VenueViewSet, basename="venues")
router.register("amenities", AmenityViewSet, basename="amenities")
router.register("venue-images", VenueImageViewSet, basename="venue-images")

urlpatterns = [
    path("", include(router.urls)),
    path(
        "venues/<slug:venue_slug>/reviews/",ReviewViewSet.as_view({
                "get": "list",
                "post": "create",
            }
        ),
        name="venue-reviews",
    ),
]