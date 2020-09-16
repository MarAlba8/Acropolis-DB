from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.decorators import api_view
from rest_framework_simplejwt import views as jwt_views
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Member
from .serializers import *

# Create your views here.

#permission_classes = (permissions.AllowAny,) -> to let use a view without JWT
class HelloWorldView(APIView):
    #permission_classes = (permissions.AllowAny,)
    def get(self, request):
        return Response(data={"hello":"world"}, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
def members_list(request):
    if request.method == 'GET':
        data = Member.objects.all()
        serializer = MemberDetailSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MemberDetailSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        else:   
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE' ])
def member_detail(request, pk):
    try:
        member = Member.objects.get(pk=pk)
    except Member.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    member = Member.objects.get(pk=pk)
    if request.method == 'GET':
        serializer = MemberDetailSerializer(member, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = MemberDetailSerializer(member, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        member.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refreshToken"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)