from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:perfil_id>/', views.exibir, name='exibir'),
    path('convidar/<int:perfil_id>/', views.convidar, name='convidar'),
    path('aceitar/<int:convite_id>/', views.aceitar, name='aceitar'),
]