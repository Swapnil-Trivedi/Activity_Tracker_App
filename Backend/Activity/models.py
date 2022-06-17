from operator import mod
from pydoc import describe
from turtle import title
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Activity(models.Model):
    author=models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField(max_length=100, blank=False)
    description=models.TextField()
    createdAt=models.DateTimeField(auto_now_add=True)
    completeDate=models.DateTimeField(blank=False)

    def __str__(self):
        return self.title


class Steps(models.Model):
    pass

