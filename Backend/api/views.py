from django.shortcuts import render
from rest_framework import generics
from .models import ReviewPost
from .serializers import ReviewPostSerializer


class ReviewPostListCreate(generics.ListCreateAPIView):
    queryset = ReviewPost.objects.all()
    serializer_class = ReviewPostSerializer

class ReviewPostListRetrieveDestroy(generics.RetrieveDestroyAPIView):
    queryset = ReviewPost.objects.all()
    serializer_class = ReviewPostSerializer
    lookup_field = 'pk'
