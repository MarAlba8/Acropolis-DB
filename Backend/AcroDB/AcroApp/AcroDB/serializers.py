from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import Member

class MemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member 
        fields = ('pk', 'name', 'telephone', 'address')

class MemberDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member 
        fields = ('pk', 'name', 'telephone', 'address', 'dateBorn', 'dateIngress')