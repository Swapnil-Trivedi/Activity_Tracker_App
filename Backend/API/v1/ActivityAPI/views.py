from http.client import HTTPResponse
from telnetlib import STATUS
from urllib import response
from rest_framework import generics,permissions,viewsets
from Activity.models import Activity,Steps
from django.contrib.auth import get_user_model
from .serializers import ActivitySerializer,StepsSerializer
from rest_framework.exceptions import NotFound 

class ActivityList(generics.ListCreateAPIView):
    queryset=Activity.objects.all()
    serializer_class=ActivitySerializer

class ActivityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Activity.objects.all()
    serializer_class=ActivitySerializer

class StepsList(generics.ListCreateAPIView):
    serializer_class=StepsSerializer
    # to get based on part of url
    def get_queryset(self):
        activityId=self.kwargs['activity_id']
        data=Steps.objects.filter(activity_id=activityId).exists()
        if not data:
            raise NotFound()
        else:
            return Steps.objects.filter(activity_id=activityId)

class StepsDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=StepsSerializer

    def get_queryset(self):
        activityId=self.kwargs['activity_id']
        stepId=self.kwargs['pk']
        data=Steps.objects.filter(activity_id=activityId).exists()
        if  data:
            return Steps.objects.filter(id=stepId,activity_id=activityId)
        else:
            return NotFound()
    