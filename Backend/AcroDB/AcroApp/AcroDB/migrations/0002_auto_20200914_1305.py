# Generated by Django 3.1.1 on 2020-09-14 13:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AcroDB', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='dateBorn',
            field=models.DateField(default=datetime.date(2020, 9, 14)),
        ),
        migrations.AlterField(
            model_name='member',
            name='dateIngress',
            field=models.DateField(default=datetime.date(2020, 9, 14)),
        ),
    ]
