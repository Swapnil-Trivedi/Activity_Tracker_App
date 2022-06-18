from rest_framework import generics,permissions,viewsets
from Activity.models import Activity,Steps
from django.contrib.auth import get_user_model
from .serializers import ActivitySerializer,StepsSerializer


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
        fk=self.kwargs['pk']
        return Steps.objects.filter(activity_id=fk)
    

class StepsDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=StepsSerializer

    def get_queryset(self):
        activityId=self.kwargs['pk']
        stepId=self.kwargs['pk1']
        return Steps.objects.filter(activity_id=activityId,id=stepId)
    