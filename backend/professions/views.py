from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SpecNodeSerializer
from .models import SpecNode

# Create your views here.

class SpecNodeView(viewsets.ModelViewSet):
    serializer_class = SpecNodeSerializer
    queryset = SpecNode.objects.all()