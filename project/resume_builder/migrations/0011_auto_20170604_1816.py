# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-06-04 18:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('resume_builder', '0010_seed_onet_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='occupation',
            name='name',
            field=models.CharField(db_index=True, max_length=200),
        ),
    ]