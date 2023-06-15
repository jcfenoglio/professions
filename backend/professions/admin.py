from django.contrib import admin
from .models import SpecNode

class ProfessionsAdmin(admin.ModelAdmin):
    list_display = ('name', 'maxKnowledge', 'parent')
    
# Register your models here.

admin.site.register(SpecNode, ProfessionsAdmin)