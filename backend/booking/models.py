from django.db import models
from django.conf import settings
from venues.models import Venue
import uuid


class Booking(models.Model):

    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("confirmed", "Confirmed"),
        ("cancelled", "Cancelled"),
        ("completed", "Completed"),
        ("expired", "Expired"),
    ]

    PAYMENT_STATUS_CHOICES = [
        ("pending", "Pending"),
        ("paid", "Paid"),
        ("failed", "Failed"),
        ("refunded", "Refunded"),
    ]

    EVENT_TYPE_CHOICES = [
        ("wedding", "Wedding"),
        ("birthday", "Birthday"),
        ("conference", "Conference"),
        ("meeting", "Meeting"),
        ("party", "Party"),
        ("engagement", "Engagement"),
        ("reception", "Reception"),
        ("other", "Other"),
    ]

    booking_reference = models.UUIDField(
        default=uuid.uuid4,
        editable=False,
        unique=True
    )

    venue = models.ForeignKey(
        Venue,
        on_delete=models.CASCADE,
        related_name="bookings"
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="bookings"
    )

    event_type = models.CharField(
        max_length=30,
        choices=EVENT_TYPE_CHOICES,
        default="other"
    )

    booking_date = models.DateField()

    start_time = models.TimeField()

    end_time = models.TimeField()

    guests = models.PositiveIntegerField()

    total_price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    special_request = models.TextField(
        blank=True,
        null=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="pending"
    )

    payment_status = models.CharField(
        max_length=20,
        choices=PAYMENT_STATUS_CHOICES,
        default="pending"
    )

    expires_at = models.DateTimeField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.booking_reference} - {self.venue.name}"