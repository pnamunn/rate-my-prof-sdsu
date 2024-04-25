from django.shortcuts import render
from rest_framework import generics
from .models import ReviewPost
from .serializers import ReviewPostSerializer


class ReviewPostListCreate(generics.ListCreateAPIView):
    queryset = ReviewPost.objects.all()
    serializer_class = ReviewPostSerializer