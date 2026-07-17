import django_filters

from .models import Venue


class VenueFilter(django_filters.FilterSet):
    city = django_filters.CharFilter(lookup_expr="icontains")
    state = django_filters.CharFilter(lookup_expr="icontains")
    category = django_filters.CharFilter(lookup_expr="exact")

    min_price = django_filters.NumberFilter(
        field_name="price_per_hour",
        lookup_expr="gte"
    )

    max_price = django_filters.NumberFilter(
        field_name="price_per_hour",
        lookup_expr="lte"
    )

    min_capacity = django_filters.NumberFilter(
        field_name="capacity",
        lookup_expr="gte"
    )

    class Meta:
        model = Venue
        fields = [
            "city",
            "state",
            "category",
            "min_price",
            "max_price",
            "min_capacity",
        ]