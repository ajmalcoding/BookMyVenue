import django_filters

from .models import Venue


class VenueFilter(django_filters.FilterSet):
    min_price = django_filters.NumberFilter(
        field_name="price_per_hour",
        lookup_expr="gte",
    )

    max_price = django_filters.NumberFilter(
        field_name="price_per_hour",
        lookup_expr="lte",
    )

    capacity_min = django_filters.NumberFilter(
        field_name="capacity",
        lookup_expr="gte",
    )

    capacity_max = django_filters.NumberFilter(
        field_name="capacity",
        lookup_expr="lte",
    )

    amenities = django_filters.CharFilter(
        method="filter_amenities",
    )

    def filter_amenities(self, queryset, name, value):
        amenity_ids = [int(id) for id in value.split(",")]

        return queryset.filter(
            amenities__id__in=amenity_ids
        ).distinct()

    class Meta:
        model = Venue
        fields = [
            "category",
            "min_price",
            "max_price",
            "capacity_min",
            "capacity_max",
            "amenities",
        ]