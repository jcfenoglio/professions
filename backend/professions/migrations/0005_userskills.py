# Generated by Django 4.1.7 on 2023-06-12 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('professions', '0004_remove_specnode_knowledge_remove_specnode_unlocked'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserSkills',
            fields=[
                ('name', models.CharField(max_length=120, primary_key=True, serialize=False)),
                ('points', models.PositiveSmallIntegerField()),
            ],
        ),
    ]
