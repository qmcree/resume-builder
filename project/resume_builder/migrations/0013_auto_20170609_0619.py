# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-06-09 06:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('resume_builder', '0012_auto_20170609_0618'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='city',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='resume',
            name='country',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='resume',
            name='state',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
    ]
