from django.db import models
from datetime import date
# Create your models here.

class Member(models.Model):
    name = models.CharField(max_length=100)
    telephone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    dateBorn = models.DateField(default=date.today())
    dateIngress = models.DateField(default=date.today())

    def __str__(self):
        return self.name
