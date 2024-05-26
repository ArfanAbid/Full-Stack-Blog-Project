from django.shortcuts import render

# Create your views here.

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import ContactSerializers


class ContactView(APIView):
    '''
    API Endpoint for ContactUs
    '''
    
    def post(self, request, *args, **kwargs):
        try:
            serializer=ContactSerializers(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response ({'message':"Response Submitted Successfully"},status=status.HTTP_201_CREATED)
            return Response (serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)
            
                
            
    
    
