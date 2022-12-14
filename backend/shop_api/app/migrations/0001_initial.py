# Generated by Django 4.1.2 on 2022-10-31 03:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('slug', models.SlugField()),
            ],
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField()),
                ('body', models.TextField(max_length=255)),
                ('price', models.FloatField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('available_count', models.PositiveIntegerField(default=0)),
                ('likes', models.PositiveIntegerField(default=0)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='app.category')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('Formed', 'Formed'), ('Accepted', 'Accepted'), ('Performs', 'Performs'), ('Done', 'Done')], default='Formed', max_length=15)),
                ('created', models.DateField(auto_now_add=True)),
                ('updated', models.DateField(auto_now=True)),
                ('full_name', models.CharField(max_length=60)),
                ('phone', models.CharField(max_length=15)),
                ('delivery_address', models.CharField(blank=True, max_length=50)),
                ('total_cost', models.FloatField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(default=1)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.item')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.order')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('text', models.TextField(max_length=3000)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.item')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
