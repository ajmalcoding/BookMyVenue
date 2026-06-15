from django.shortcuts import render

# Create your views here.
# backend/accounts/views.py

from rest_framework.response import Response
from rest_framework.views import APIView


class TestAPIView(APIView):
    def get(self, request):
        return Response({"message": "Hello from Django"})