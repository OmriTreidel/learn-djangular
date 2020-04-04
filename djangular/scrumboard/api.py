# for views only use ListAPIView instead of ModelViewSet
from rest_framework.viewsets import ModelViewSet

from .models import Card, List
from .serializers import CardSerializer, ListSerializer


class ListViewSet(ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer


class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
