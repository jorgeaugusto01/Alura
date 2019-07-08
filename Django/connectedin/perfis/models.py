from django.db import models
from django.contrib.auth.models import User


class Perfil(models.Model):
    
    nome = models.CharField(max_length=255, null=False)
    telefone = models.CharField(max_length=15, null=False)
    nome_empresa = models.CharField(max_length=255, null=False)
    contatos = models.ManyToManyField('self')
    usuario = models.OneToOneField(User, related_name="perfil", on_delete=models.PROTECT)

    @property
    def email(self):
        return self.usuario.email

    def convidar(self, perfil_convidado):
        Convite(solicitante=self, convidado=perfil_convidado).save()

class Convite(models.Model):
    #related_name adiciona os atributos na classe perfil
    solicitante = models.ForeignKey(Perfil, related_name='convites_feitos', on_delete=models.PROTECT)
    convidado = models.ForeignKey(Perfil, related_name='convites_recebidos',on_delete=models.PROTECT)

    def aceitar(self):
        self.convidado.contatos.add(self.solicitante)
        self.solicitante.contatos.add(self.convidado)
        self.delete()

    