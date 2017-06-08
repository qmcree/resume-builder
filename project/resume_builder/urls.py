from django.conf.urls import url

from resume_builder import views

urlpatterns = [
    url(r'^skills', views.list_skills),
    url(r'^occupations', views.list_occupations),
]
