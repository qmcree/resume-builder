from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^skills/$', views.list_skills),
    url(r'^occupations/$', views.list_occupations),
    url(r'^occupations/(\d{2}-\d{4}\.\d{2})/tasks/$', views.list_tasks),
]
