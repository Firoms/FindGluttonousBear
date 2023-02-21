from django.db import models

# Create your models here.

class Ranking(models.Model):
    nickname = models.CharField(max_length=15, null=False)
    score = models.IntegerField(default=0)