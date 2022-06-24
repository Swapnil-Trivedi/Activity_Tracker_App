# Activity Tracker Application
## About
This is an application to keep track of an objective and to track the steps/activity taken to achieve the objective.
## Goal
The goal is to come up with a Angular based frontend and a working REST API based on Django.

## Features

With this API:
- You can create a user account - Registration.
- You can login and log out - Authorization and Authentication.
- You can create, View, Update and delete an acitivity for the user.
- You can create, View, Update and delete a step for an activity.

## API Documentation
Documentation for this API can be found at http://127.0.0.1:8000/docs, when you run the application locally.

## Tools
Tools used during the development of this API are:
- [OpenAPI/Swagger](https://swagger.io/specification/) - This is a tool for documenting the API
- [Django-allauth](https://django-allauth.readthedocs.io/en/latest/installation.html) - This is the authentication library for Django rest framework
- [Django-auth](https://docs.djangoproject.com/en/4.0/topics/auth/) - Tool for user authorization
- [Django_Rest_framework](https://www.django-rest-framework.org/) - Framework for Django to integrate and develop rest api
- [Django](https://www.djangoproject.com/) - high-level Python web framework that encourages rapid development

## Requirements
- Python 2.7.1x+. preferably use Python 3.x.x+
## Tests
### Django Backend
Even God commands us to run tests: 1 Thessalonians 5:21; "Test all things."
So to run tests, go to your command line prompt and execute the following command

```
    sh
    $ cd Django_Blog_Project
    $ python manage.py test posts

```
## Running the application
### Django

To run this application on a linux box, clone the repository and execute the following command.
```
    sh
    $ cd Django_Blog_Project
    $ pip install pipenv
    $ pipenv install
    $ pipenv shell
    $ python manage.py makemigrations
    $ python manage.py migrate
    $ python manage.py test posts
    $ python manage.py runserver

```