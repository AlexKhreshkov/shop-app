# Generated by Django 4.0 on 2022-11-07 04:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_userprofile_country'),
    ]

    operations = [
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.TextField(blank=True, max_length=128)),
            ],
        ),
        migrations.AlterField(
            model_name='order',
            name='delivery_address',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='order',
            name='full_name',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='order',
            name='phone',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='app.status'),
        ),
    ]
