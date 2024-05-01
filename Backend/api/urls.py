from django.urls import path
from . import views

urlpatterns = [
    path("reviewposts/", views.ReviewPostListCreate.as_view(), name="reviewpost-view-create"),
    path("reviewposts/<int:pk>/", views.ReviewPostListRetrieveDestroy.as_view(), name="update",),
]