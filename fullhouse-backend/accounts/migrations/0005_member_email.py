# Generated by Django 5.0.6 on 2024-11-23 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "accounts",
            "0004_member_first_name_member_last_name_member_password_and_more",
        ),
    ]

    operations = [
        migrations.AddField(
            model_name="member",
            name="email",
            field=models.EmailField(default="josiexw@mit.edu", max_length=254),
            preserve_default=False,
        ),
    ]
