from rest_framework import serializers
from .models import SpecNode

class SpecNodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecNode
        fields = (
            'name',
            'maxKnowledge',
            'parent'
        )

        