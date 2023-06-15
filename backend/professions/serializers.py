from rest_framework import serializers
from .models import SpecNode, UserSkills

class SpecNodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecNode
        fields = (
            'name',
            'maxKnowledge',
            'parent'
        )

class UserSkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSkills
        fields = (
            'name',
            'points'
        )
        