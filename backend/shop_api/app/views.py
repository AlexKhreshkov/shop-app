from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Item, Category, Comment, Order, UserProfile, OrderItem, Status, Cart, CartItem
from app.serializers import ItemSerializer, CategorySerializer, ProfilesSerializer, \
    ProfileDetailSerializer, CommentCreateSerializer, CommentGetListSerializer, OrderItemSerializer, OrderSerializer, \
    OrderItemCreateSerializer, StatusesSerializer, CartSerializer, CartItemSerializer
from .permissions import IsOwner, IsOwnerOrAdmin


class CategoryAPIList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ItemAPIList(generics.ListAPIView):
    queryset = Item.objects.all().order_by('id')
    serializer_class = ItemSerializer


class ItemAPIDetail(generics.RetrieveAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    lookup_field = 'slug'


class ItemAPIUpdate(generics.UpdateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    lookup_field = 'slug'
    permission_classes = (IsAuthenticated,)


class CommentsAPIList(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentGetListSerializer


class CommentsCreateAPI(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializer
    permission_classes = (IsAuthenticated,)


class CommentsAPIRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializer
    permission_classes = (IsOwner,)


class UsersProfilesAPIList(generics.ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = ProfilesSerializer


class UserProfileAPIUpdate(generics.RetrieveUpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = ProfileDetailSerializer
    permission_classes = (IsOwnerOrAdmin,)


class OrderItemAPIList(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    permission_classes = (IsAuthenticated,)


class OrderItemAPICreate(generics.CreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemCreateSerializer
    permission_classes = (IsAuthenticated,)


class OrderAPIList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated,)


class OrderStatuses(generics.ListAPIView):
    queryset = Status.objects.all()
    serializer_class = StatusesSerializer
    permission_classes = (IsAuthenticated,)


class CartAPIList(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartAPIDetail(generics.RetrieveUpdateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartItemAPIList(generics.ListCreateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer


class CartItemAPIRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    permission_classes = (IsAuthenticated,)

