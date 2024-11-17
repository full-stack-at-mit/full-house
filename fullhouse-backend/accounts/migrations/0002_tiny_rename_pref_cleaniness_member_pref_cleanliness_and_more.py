# Generated by Django 5.1.1 on 2024-10-20 22:32

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Tiny",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("value", models.IntegerField()),
            ],
        ),
        migrations.RenameField(
            model_name="member",
            old_name="pref_cleaniness",
            new_name="pref_cleanliness",
        ),
        migrations.RemoveField(
            model_name="member",
            name="profile_pic",
        ),
        migrations.AddField(
            model_name="member",
            name="account_creation_date",
            field=models.DateField(default=django.utils.timezone.now, editable=False),
            preserve_default=False,
        ),
    ]