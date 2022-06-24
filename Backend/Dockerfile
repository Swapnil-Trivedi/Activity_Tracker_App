FROM python:3.10

ENV PYTHONUNBUFFERED 1

WORKDIR /Tracker

ADD . /Tracker

RUN pip install -r requirements.txt

COPY . /Tracker

EXPOSE 8000

CMD ["python","manage.py","runserver","0.0.0.0:8000"]