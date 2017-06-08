from django.http import HttpResponse, HttpResponseNotFound, HttpResponseNotAllowed, JsonResponse
from pdfkit import PDFKit

from .models import Skill, Occupation, Task


def list_skills(request):
    return JsonResponse([skill.name for skill in Skill.objects.all()], safe=False)


def list_occupations(request):
    manager = Occupation.objects
    name_filter = request.GET.get('name')

    if name_filter:
        queryset = manager.filter(name__icontains=name_filter)
    else:
        queryset = manager.all()

    occupations = [
        dict(code=occupation.code_id, name=occupation.name)
        for occupation in queryset[0:100]  # Limit 100 results
    ]
    return JsonResponse(occupations, safe=False)


def list_tasks(request, code):
    queryset = Task.objects.filter(occupation_code__code__exact=code)

    if queryset:
        return JsonResponse([task.task for task in queryset], safe=False)
    else:
        return HttpResponseNotFound()


def create_resume(request):
    if request.method != 'POST':
        return HttpResponseNotAllowed(('POST',))
    else:
        body = """
            <html>
              <head>
              </head>
              <body>
              Hello this is test HTML for a PDF.
              </body>
            </html>
            """
        kit = PDFKit(body, 'string')
        pdf = kit.to_pdf()
        response = HttpResponse(pdf)
        response['Content-Type'] = 'application/pdf'
        return response
