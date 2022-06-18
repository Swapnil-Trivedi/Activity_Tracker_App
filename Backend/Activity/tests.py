from ast import Pass
from dataclasses import dataclass
from django.test import TestCase
from .models import Activity,Steps
from django.contrib.auth.models import User
from datetime import datetime
from django.utils import timezone
# Create your tests here.

class ActivityTest(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        
        testUser1=User.objects.create_user(username="testUser1",password='testUser123')
        testUser1.save()
        testUser2=User.objects.create_user(username="testUser2",password='testUser123')
        testUser2.save()
        testUser3=User.objects.create_user(username="testUser3",password='testUser123')
        testUser3.save()
        activity1=Activity.objects.create(author=testUser1,title='Activity1',description='This is the description for user 1',completeDate=datetime.now(tz=timezone.utc))
        activity1.save()
        activity2=Activity.objects.create(author=testUser2,title='Activity2',description='This is the description for user 2',completeDate=datetime.now(tz=timezone.utc))
        activity2.save()
        activity3=Activity.objects.create(author=testUser3,title='Activity3',description='This is the description for user 3',completeDate=datetime.now(tz=timezone.utc))
        activity3.save()
        steps1=Steps.objects.create(activity=activity1,title='Step action 1 for activity 1',description='This is the step 1 for activity 1')
        steps1.save()
        steps2=Steps.objects.create(activity=activity1,title='Step action 2 for activity 1',description='This is the step 2 for activity 1')
        steps2.save()
        steps3=Steps.objects.create(activity=activity2,title='Step action 1 for activity 3',description='This is the step 1 for activity 3')
        steps3.save()

    def testUser1(self):
        activity=Activity.objects.get(id=1)
        author=f'{activity.author}'
        title=f'{activity.title}'
        description=f'{activity.description}'
        self.assertEqual(author,'testUser1')
        self.assertEqual(title,'Activity1')
        self.assertEqual(description,'This is the description for user 1')

    def testUser1Step1(self):
        activity=Activity.objects.get(id=1)
        steps=Steps.objects.get(id=activity.id)
        title=f'{steps.title}'
        description=f'{steps.description}'
        self.assertEqual(title,'Step action 1 for activity 1')
        self.assertEqual(description,'This is the step 1 for activity 1')

    def testUser3(self):
        activity=Activity.objects.get(id=3)
        author=f'{activity.author}'
        title=f'{activity.title}'
        description=f'{activity.description}'
        self.assertEqual(author,'testUser3')
        self.assertEqual(title,'Activity3')
        self.assertEqual(description,'This is the description for user 3')
    
    def testUser2Step1(self):
        activity=Activity.objects.get(id=3)
        steps=Steps.objects.get(id=activity.id)
        title=f'{steps.title}'
        description=f'{steps.description}'
        self.assertEqual(title,'Step action 1 for activity 3')
        self.assertEqual(description,'This is the step 1 for activity 3')