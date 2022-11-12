from django.contrib import admin
from .models import Category, Item, Comment, Order, OrderItem, UserProfile, Status, Cart, CartItem


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'slug')
    search_fields = ('name',)
    prepopulated_fields = {"slug": ("name",)}


class ItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'body', 'price', 'category', 'available_count', 'image')
    search_fields = ('title',)
    prepopulated_fields = {"slug": ("title",)}


class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'item', 'name', 'text', 'created')


class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'user', 'status', 'created', 'updated', 'full_name', 'phone', 'delivery_address', 'total_cost')


class StatusAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')


class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'order', 'item', 'quantity')


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'phone', 'country', 'address', 'profile_pic')


class CartAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'total_cost')


class CartItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'item', 'cart', 'quantity')


admin.site.register(Category, CategoryAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Status, StatusAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(CartItem, CartItemAdmin)
