from django.contrib import admin
from .models import Venue, Amenity, VenueImage, VenueCapacity , Review

# Register your models here.
admin.site.register(Venue)
admin.site.register(Amenity)
admin.site.register(VenueImage)
admin.site.register(VenueCapacity)
admin.site.register(Review)
