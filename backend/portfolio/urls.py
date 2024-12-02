from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # The index view for the homepage
]
