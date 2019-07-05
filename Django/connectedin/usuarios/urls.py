from django.urls import path
from views import RegistrarUsuarioView

from . import views

urlpatterns = [
    path('registrar/', RegistrarUsuarioView.as_view(), name='registrar'),
]