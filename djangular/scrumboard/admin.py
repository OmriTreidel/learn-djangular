from django.contrib import admin

# Register your models here.
from .models import Card, List

admin.site.register(Card)
admin.site.register(List)