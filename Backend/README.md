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
