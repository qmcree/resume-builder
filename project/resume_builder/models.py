from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=50)


class SurveyResponse(models.Model):
    pass


class ResumeExport(models.Model):
    pass


class OccupationCode(models.Model):
    code = models.CharField(max_length=10, primary_key=True)  # Should be a min-length of 10, too.


class Occupation(models.Model):
    code = models.ForeignKey(OccupationCode)
    name = models.CharField(max_length=150)
    is_master = models.BooleanField()

    class Meta:
        unique_together = ('code', 'is_master')  # Each code may only have one master occupation.


class OccupationDescription(models.Model):
    code = models.ForeignKey(OccupationCode)
    description = models.CharField(max_length=1000)


class Task(models.Model):
    occupation = models.ForeignKey(Occupation)
    task = models.CharField(max_length=1000)
    onet_id = models.DecimalField(max_digits=8, decimal_places=0)  # No idea why they store this as a decimal field.
    updated_at = models.DateField()
