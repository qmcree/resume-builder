from django.http import JsonResponse

# Create your views here.
from resume_builder.models import Skill, Occupation


def list_skills(request):
    return JsonResponse([skill.name for skill in Skill.objects.all()], safe=False)


def list_occupations(request):
    manager = Occupation.objects
    name_filter = request.GET.get('name')

    if name_filter:
        queryset = manager.filter(name__icontains=name_filter)
    else:
        queryset = manager.all()

    occupations = [dict(code=occupation.code_id, name=occupation.name) for occupation in queryset]
    return JsonResponse(occupations, safe=False)
