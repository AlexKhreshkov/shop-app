from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from app.views import ItemAPIList, CategoryAPIList, ItemAPIDetail, CommentsAPIList, UsersProfilesAPIList, \
    CommentsAPIRetrieveUpdateDestroy, UserProfileAPIUpdate, CommentsCreateAPI, OrderItemAPIList, OrderAPIList, \
    OrderItemAPICreate, OrderStatuses, ItemAPIUpdate, CartAPIList, CartItemAPIList, CartAPIDetail, \
    CartItemAPIRetrieveUpdateDestroy

urlpatterns = [
    path('api/auth/', include('rest_framework.urls')),
    path('api/items/', ItemAPIList.as_view()),
    path('api/items/<slug:slug>/', ItemAPIDetail.as_view()),
    path('api/items/<slug:slug>/update/', ItemAPIUpdate.as_view()),
    path('api/categories/', CategoryAPIList.as_view()),
    path('api/comments/', CommentsAPIList.as_view()),
    path('api/comments/add/', CommentsCreateAPI.as_view()),
    path('api/comments/<int:pk>/', CommentsAPIRetrieveUpdateDestroy.as_view()),
    path('api/profiles/', UsersProfilesAPIList.as_view()),
    path('api/profiles/<int:pk>/', UserProfileAPIUpdate.as_view()),
    path('api/carts/', CartAPIList.as_view()),
    path('api/carts/<int:pk>/', CartAPIDetail.as_view()),
    path('api/carts-items/', CartItemAPIList.as_view()),
    path('api/carts-items/<int:pk>/', CartItemAPIRetrieveUpdateDestroy.as_view()),
    path('api/orders-items/', OrderItemAPIList.as_view()),
    path('api/orders-items/create/', OrderItemAPICreate.as_view()),
    path('api/orders/', OrderAPIList.as_view()),
    path('api/orders-statuses/', OrderStatuses.as_view()),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.authtoken')),

    # user3
    # Pc7%85vr7uE
]
