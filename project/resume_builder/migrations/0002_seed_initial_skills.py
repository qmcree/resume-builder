# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-06-03 23:13
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ('resume_builder', '0001_initial'),
    ]

    operations = [
        migrations.RunSQL("""
INSERT INTO resume_builder_skill (name)
VALUES
  ('Adaptable'),
  ('Artistic'),
  ('Assertive'),
  ('Attentive'),
  ('Bookkeeping'),
  ('Collaboration'),
  ('Communication'),
  ('Confident'),
  ('Conflict Resolution'),
  ('Cooperative'),
  ('Courteous'),
  ('Creative'),
  ('Crisis Management'),
  ('Critical Observer'),
  ('Critical Thinker'),
  ('Customer Service'),
  ('Decision Making'),
  ('Dedication'),
  ('Delegation'),
  ('Dependable'),
  ('Design Sense'),
  ('Desire to Learn'),
  ('Diplomacy'),
  ('Dispute Resolution'),
  ('Diversity Awareness'),
  ('Effective Communicator'),
  ('Emotion Management'),
  ('Empathetic'),
  ('Energetic'),
  ('Enthusiastic'),
  ('Facilitating'),
  ('Flexible'),
  ('Follow Instructions'),
  ('Follow Regulations'),
  ('Follow Rules'),
  ('Giving Feedback'),
  ('High Energy'),
  ('Highly Organized'),
  ('Honest'),
  ('Independent'),
  ('Innovation'),
  ('Leadership'),
  ('Listening'),
  ('Logical Thinking'),
  ('Management'),
  ('Mentoring'),
  ('Microsoft Office'),
  ('Motivating'),
  ('Multitasking'),
  ('Negotiation'),
  ('Networking'),
  ('Organization'),
  ('Patience'),
  ('Perceptiveness'),
  ('Perseverance'),
  ('Persistence'),
  ('Persuasion'),
  ('Planning'),
  ('Positive Work Ethic'),
  ('Problem Solving'),
  ('Public Speaking'),
  ('Punctual'),
  ('Reliable'),
  ('Research'),
  ('Resilient'),
  ('Respectful'),
  ('Results Oriented'),
  ('Safety Conscious'),
  ('Scheduling'),
  ('Self-awareness'),
  ('Self-directed'),
  ('Self-monitoring'),
  ('Self-supervising'),
  ('Selling Skills'),
  ('Sense of Humor'),
  ('Spanish Speaker'),
  ('Stress Management'),
  ('Strong Work Ethic'),
  ('Supervising'),
  ('Team Building'),
  ('Team Player'),
  ('Time Management'),
  ('Troubleshooting'),
  ('Verbal Communication'),
  ('Visual Communication'),
  ('Willingness to Learn'),
  ('Writing Skills')
        """)
    ]
