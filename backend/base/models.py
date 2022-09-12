from django.contrib.auth.models import User
from django.db import models


class Book(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    name = models.TextField()
