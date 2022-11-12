from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class Category(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField()

    def __str__(self):
        return f"{self.name}"


class Item(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField()
    body = models.TextField(max_length=255)
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    image = models.ImageField(null=True, blank=True)
    available_count = models.PositiveIntegerField(default=0)
    likes = models.ManyToManyField(User, blank=True)

    def __str__(self):
        return f"{self.title}"


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    text = models.TextField(max_length=3000)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment on: {self.item}"


class Status(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField(max_length=128, blank=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.ForeignKey(Status, on_delete=models.PROTECT)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    full_name = models.CharField(max_length=128)
    phone = models.CharField(max_length=10)
    delivery_address = models.CharField(max_length=50)
    total_cost = models.FloatField()

    def __str__(self):
        return f"Order № {self.id}"


class OrderItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=30, blank=True, default='')
    surname = models.CharField(max_length=30, blank=True, default='')
    phone = models.CharField(max_length=15, blank=True, default='')
    country = models.CharField(max_length=70, blank=True, default='')
    address = models.CharField(max_length=100, blank=True, default='')
    profile_pic = models.ImageField(null=True, blank=True, upload_to="profiles_images/",
                                    default="profiles_images/ava.png")

    def __str__(self):
        return f"User {self.user.username}"


class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    total_cost = models.FloatField()

    def __str__(self):
        return f"Cart № {self.id}"


class CartItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()
