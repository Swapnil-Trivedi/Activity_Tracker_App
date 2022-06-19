from xml.etree.ElementInclude import include
from django.urls import path
from .views import ActivityList,ActivityDetail,StepsList,StepsDetail

urlpatterns = [
    path('activity/',ActivityList.as_view()),
    path('activity/<int:pk>/',ActivityDetail.as_view()),
    path('steps/<int:activity_id>/',StepsList.as_view()),
    path('steps/<int:activity_id>/<int:pk>/',StepsDetail.as_view()),
]
