# Generated by Django 4.1.7 on 2023-03-20 10:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("lab1", "0007_rename_city_publisher_country"),
    ]

    operations = [
        migrations.RenameField(
            model_name="customers",
            old_name="name",
            new_name="name_of_customer",
        ),
    ]
