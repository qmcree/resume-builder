from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from resume_builder.models import Skill


def list_skills(request):
    return JsonResponse([skill.name for skill in Skill.objects.all()], safe=False)
