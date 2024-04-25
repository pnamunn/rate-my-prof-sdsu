from django.urls import path
from . import views

urlpatterns = [
    path("reviewposts/", views.ReviewPostListCreate.as_view(), name="blogpost-view-create")
]