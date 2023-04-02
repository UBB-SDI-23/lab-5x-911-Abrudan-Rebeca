# Generated by Django 4.1.7 on 2023-03-18 21:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("lab1", "0004_rename_name_publisher_publisher"),
    ]

    operations = [
        migrations.AlterField(
            model_name="books",
            name="publisher",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="books",
                to="lab1.publisher",
            ),
        ),
        migrations.CreateModel(
            name="CustomersBooks",
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
                ("date", models.DateField(default="2000-12-20")),
                (
                    "books_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="books_id",
                        to="lab1.books",
                    ),
                ),
                (
                    "customers_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="customers_id",
                        to="lab1.customers",
                    ),
                ),
            ],
        ),
    ]
