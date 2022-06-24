## Notes for Backend
- Activity Model 
    - Author : User FK
    - Title : charField
    - Description : textArea
    - CreatedAt: dateTime
    - CompleteDate : dateTime

- Steps Model
    - Activity id : Activity FK
    - Title : charField
    - Description : textAre
    - CreatedAt : dateTime 

We have one-to-many realtion for Activity : Model

## Views list
List of all the views needed for API
- ActivityList : To list all the activities for a user
- ActivityDetail : To get the details for a single activity
- StepsList : To list all the steps for an activity
- StepsDetail :  To get the details for a single step

## Paths List

- activity/ : ActivityList
- activity/<int:pk activity id>/ : ActivityDetail
- steps/<int:pk activity id>/ : StepsList
- steps/<int:pk activity id>/ <int:pk step id> : StepDetail

## Endpoints
List of API endpoints that can be accessed via backend for the api version1.

Base URL: 127.0.0.1:8000/api/v1/

Endpoint                           |   HTTP Verb    |     Description
-----------------------------------|----------------|------------------    
activity/                          |   GET          | To get the list of all the activites for a user
activity/<int:pk>/                 |   GET          | To get the details for a specific activity
steps/<int:activityId>             |   GET          | To get the list of all the steps inside an activity
steps/<int:activityId>/<int:pk>    |   GET          | To get the detail of a specific step         
/rest-auth/registration            |   POST         | To register a user     
/rest-auth/login                   |   POST         | To get the auth tokken from login     
/rest-auth/logout                  |   GET          | To logout      
/rest-auth/password/reset          |   POST         | Endpoint to reset password      
/rest-auth/password/reset/confirm  |   POST         | Endpoint to confirm password reset    
/schema/                           |   GET          | Endpoint to get api schema
/docs/                             |   GET          | To access the api documentation              