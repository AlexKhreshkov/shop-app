from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Item, Category, Comment, OrderItem, UserProfile, Order, Status, Cart, CartItem


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug')


class ItemSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name')

    class Meta:
        model = Item
        fields = (
            'id', 'title', 'category', 'category_name', 'body', 'price', 'available_count', 'image', 'likes', 'slug')


class CommentGetListSerializer(serializers.ModelSerializer):
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    user_name = serializers.CharField(source='user.username')
    item_slug = serializers.CharField(source='item.slug')

    class Meta:
        model = Comment
        fields = ('id', 'user', 'user_name', 'item_slug', 'item', 'name', 'text', 'created')


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'name', 'text', 'created', 'item', 'user')


class ProfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'user', 'profile_pic')


class ProfileDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'user_id', 'name', 'surname', 'phone', 'country', 'address', 'profile_pic')


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = (
            'id', 'user', 'user_id', 'status', 'created', 'updated', 'full_name', 'phone', 'delivery_address',
            'total_cost')


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('id', 'order_id', 'item_id', 'quantity')


class OrderItemCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('id', 'order', 'item', 'quantity')


class StatusesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = ('id', 'name', 'description')


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ('id', 'user', 'total_cost')


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ('id', 'item', 'cart', 'quantity')
