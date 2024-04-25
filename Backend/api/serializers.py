from rest_framework import serializers
from .models import ReviewPost

class ReviewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewPost
        fields = ["id", "professorName","rating","review","published_date"]
        