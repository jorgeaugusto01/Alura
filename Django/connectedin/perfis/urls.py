from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:perfil_id>/', views.exibir, name='exibir'),
    
]