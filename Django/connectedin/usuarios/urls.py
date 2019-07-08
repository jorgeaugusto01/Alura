from django.urls import path

from . import views

urlpatterns = [
    path('registrar/', views.RegistrarUsuarioView.as_view(), name='registrar'),
]