from dataclasses import fields
from rest_framework import serializers
from Activity.models import Activity,Steps
from django.contrib.auth import get_user_model

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        fields=('id','author','title','description','createdAt','completeDate')
        model=Activity

class StepsSerializer(serializers.ModelSerializer):
    class Meta:
        fields=('id','activity','title','description','createdAt')
        model=Steps