from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=50)


class OccupationCode(models.Model):
    code = models.CharField(max_length=10, primary_key=True)  # Should be a min-length of 10, too.

    def __str__(self):
        return self.code


class Occupation(models.Model):
    code = models.ForeignKey(OccupationCode)
    name = models.CharField(max_length=200, db_index=True)
    is_master = models.NullBooleanField()

    class Meta:
        unique_together = ('code', 'is_master')  # Each code may only have one master occupation.


class OccupationDescription(models.Model):
    code = models.ForeignKey(OccupationCode)
    description = models.CharField(max_length=1000)


class Task(models.Model):
    occupation_code = models.ForeignKey(OccupationCode)
    task = models.CharField(max_length=1000)
    onet_id = models.DecimalField(max_digits=8, decimal_places=0, unique=True)  # O*NET stores this as a decimal...
    updated_at = models.DateField()


class ResumeType:
    TYPE_CHRONOLOGICAL = 1
    TYPE_FUNCTIONAL = 2
    TYPE_TARGETED = 3
    TYPE_COMBINATION = 4

    types = (
        dict(id=TYPE_CHRONOLOGICAL, name='Chronological'),
        dict(id=TYPE_FUNCTIONAL, name='Functional'),
        dict(id=TYPE_TARGETED, name='Targeted'),
        dict(id=TYPE_COMBINATION, name='Combination'),
    )


class Resume(models.Model):
    type_id = models.PositiveSmallIntegerField()
    full_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)  # Allow for any symbols.
    email = models.EmailField()
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    objective = models.TextField(max_length=2000)


class ResumeSkill(models.Model):
    resume = models.ForeignKey(Resume)
    skill = models.ForeignKey(Skill)


class ResumeQualification(models.Model):
    resume = models.ForeignKey(Resume)
    qualification = models.TextField(max_length=500)


class ResumeOccupation(models.Model):
    resume = models.ForeignKey(Resume)
    company_name = models.CharField(max_length=50)
    occupation = models.ForeignKey(Occupation)  # Relate occupation so that task list can be viewed if resume edited.
    occupation_name = models.CharField(max_length=200)  # Name can be different than O*NET's name.
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    started_at = models.DateField()
    ended_at = models.DateField()


class ResumeOccupationTask(models.Model):
    resume_occupation = models.ForeignKey(ResumeOccupation)
    task = models.TextField(max_length=1000)  # Task can be different than O*NET's, so we don't relate to Task.


class ResumeEducation(models.Model):
    resume = models.ForeignKey(Resume)  # Can have multiple educations per resume.
    institution = models.CharField(max_length=50)
    degree = models.CharField(max_length=50)  # Could also be a certification. Is there a better term for this?
    description = models.TextField(max_length=1000)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    started_at = models.DateField()
    ended_at = models.DateField()


class ResumeTypeResponse(models.Model):
    resume = models.OneToOneField(Resume)
    occupation_seeking = models.PositiveSmallIntegerField()
    occupation_gap = models.PositiveSmallIntegerField()
    occupation_history = models.PositiveSmallIntegerField()


class SurveyResponse(models.Model):
    resume = models.OneToOneField(Resume)
    zip_code = models.CharField(max_length=10)
    device_type_id = models.PositiveSmallIntegerField()
