from django.contrib import admin
from django.urls import path, include

from perfis import views

urlpatterns = [
    
    path('', views.index, name='index'),
    include(perfis.urls)
    
]