from datetime import datetime

from rest_framework import serializers

from .models import Booking


class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = "__all__"

        read_only_fields = (
            "booking_reference",
            "user",
            "price_per_hour",
            "cleaning_fee",
            "service_fee",
            "duration_hours",
            "subtotal",
            "total_price",
            "status",
            "payment_status",
            "expires_at",
            "created_at",
            "updated_at",
        )

    def validate(self, attrs):

        venue = attrs["venue"]

        booking_date = attrs["booking_date"]

        start_time = attrs["start_time"]

        end_time = attrs["end_time"]

        guests = attrs["guests"]

        # Booking date validation

        if booking_date < datetime.today().date():
            raise serializers.ValidationError({
                "booking_date": "Booking date cannot be in the past."
            })

        # End time validation

        if end_time <= start_time:
            raise serializers.ValidationError({
                "end_time": "End time must be after start time."
            })

        # Guest validation

        if guests > venue.capacity:
            raise serializers.ValidationError({
                "guests": f"Maximum capacity is {venue.capacity}."
            })

        # Booking duration

        duration = (
            datetime.combine(booking_date, end_time)
            -
            datetime.combine(booking_date, start_time)
        ).seconds / 3600

        if duration < venue.minimum_booking_hours:
            raise serializers.ValidationError({
                "start_time":
                f"Minimum booking duration is {venue.minimum_booking_hours} hour(s)."
            })

        # Collision validation

        bookings = Booking.objects.filter(
            venue=venue,
            booking_date=booking_date,
            status__in=["pending", "confirmed"]
        )

        for booking in bookings:

            overlap = (
                start_time < booking.end_time
                and end_time > booking.start_time
            )

            if overlap:
                raise serializers.ValidationError(
                    "This venue is already booked for the selected time."
                )

        return attrs

    def create(self, validated_data):

        venue = validated_data["venue"]

        booking_date = validated_data["booking_date"]

        start_time = validated_data["start_time"]

        end_time = validated_data["end_time"]

        duration = (
            datetime.combine(booking_date, end_time)
            -
            datetime.combine(booking_date, start_time)
        ).seconds / 3600

        price_per_hour = venue.price_per_hour

        cleaning_fee = venue.cleaning_fee

        service_fee = venue.service_fee

        subtotal = duration * price_per_hour

        total_price = subtotal + cleaning_fee + service_fee

        validated_data["user"] = self.context["request"].user

        validated_data["duration_hours"] = duration

        validated_data["price_per_hour"] = price_per_hour

        validated_data["cleaning_fee"] = cleaning_fee

        validated_data["service_fee"] = service_fee

        validated_data["subtotal"] = subtotal

        validated_data["total_price"] = total_price

        return Booking.objects.create(**validated_data)