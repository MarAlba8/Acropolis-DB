from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from . import views
from .views import HelloWorldView, members_list, LogoutAndBlacklistRefreshTokenForUserView

urlpatterns = [
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('', views.members_list, name='members_list'),
    path('details/<int:pk>', views.member_detail, name='member_detail'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist')
]