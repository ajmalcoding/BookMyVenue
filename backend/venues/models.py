from django.db import models
from django.utils.text import slugify

from django.conf import settings


class Amenity(models.Model):
    name = models.CharField(max_length=100, unique=True)
    icon = models.CharField(max_length=100, blank=True)

    class Meta:
        ordering = ["name"]
        verbose_name_plural = "Amenities"

    def __str__(self):
        return self.name


class Venue(models.Model):
    class Category(models.TextChoices):
        WEDDING_HALL = "wedding_hall", "Wedding Hall"
        BANQUET_HALL = "banquet_hall", "Banquet Hall"
        CONFERENCE_HALL = "conference_hall", "Conference Hall"
        AUDITORIUM = "auditorium", "Auditorium"
        HOTEL = "hotel", "Hotel"
        RESORT = "resort", "Resort"
        PARTY_HALL = "party_hall", "Party Hall"
        MEETING_ROOM = "meeting_room", "Meeting Room"
        FARMHOUSE = "farmhouse", "Farm House"
        VILLA = "villa", "Villa"
        BEACHSIDE = "beachside", "Beachside Venue"

    class Status(models.TextChoices):
        PENDING = "pending", "Pending"
        APPROVED = "approved", "Approved"
        REJECTED = "rejected", "Rejected"

    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="venues",
    )

    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)

    short_description = models.CharField(max_length=200, blank=True)
    description = models.TextField()

    category = models.CharField(
        max_length=30,
        choices=Category.choices,
    )

    price_per_hour = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    cleaning_fee = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
    )

    service_fee = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
    )

    capacity = models.PositiveIntegerField()

    address = models.TextField()
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    landmark = models.CharField(max_length=255, blank=True)

    contact_phone = models.CharField(max_length=15)
    contact_email = models.EmailField(blank=True)

    opening_time = models.TimeField()
    closing_time = models.TimeField()

    minimum_booking_hours = models.PositiveIntegerField(default=1)
    parking_capacity = models.PositiveIntegerField(default=0)

    amenities = models.ManyToManyField(
        Amenity,
        blank=True,
        related_name="venues",
    )

    is_available = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING,
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1

            while Venue.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1

            self.slug = slug

        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class VenueImage(models.Model):
    venue = models.ForeignKey(
        Venue,
        on_delete=models.CASCADE,
        related_name="images",
    )

    image = models.ImageField(upload_to="venue_images/")
    caption = models.CharField(max_length=255, blank=True)
    is_primary = models.BooleanField(default=False)

    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return f"{self.venue.name} Image"


class VenueCapacity(models.Model):
    class Layout(models.TextChoices):
        STANDING = "standing", "Standing"
        BANQUET = "banquet", "Banquet"
        CONFERENCE = "conference", "Conference"
        THEATER = "theater", "Theater"
        CLASSROOM = "classroom", "Classroom"
        U_SHAPE = "u_shape", "U Shape"
        BOARDROOM = "boardroom", "Board Room"

    venue = models.ForeignKey(
        Venue,
        on_delete=models.CASCADE,
        related_name="layouts",
    )

    layout = models.CharField(
        max_length=20,
        choices=Layout.choices,
    )

    capacity = models.PositiveIntegerField()

    class Meta:
        unique_together = ("venue", "layout")
        ordering = ["layout"]

    def __str__(self):
        return f"{self.venue.name} - {self.layout}"