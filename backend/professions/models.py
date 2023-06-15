from django.db import models

# Create your models here.

class SpecNode(models.Model):
    name = models.CharField(max_length=120, primary_key=True)
    maxKnowledge = models.PositiveSmallIntegerField()
    parent = models.CharField(max_length=120, blank=False, null=True)

    def _str_(self) -> str:
        return self.name

class UserSkills(models.Model):
    name = models.CharField(max_length=120, primary_key=True)
    points = models.PositiveSmallIntegerField()

    def __str__(self) -> str:
        return self.name + ": " + self.points