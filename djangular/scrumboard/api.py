# for views only use ListAPIView instead of ModelViewSet
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from .models import Card, List
from .serializers import CardSerializer, ListSerializer


class ListViewSet(ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer
    permission_classes = (permissions.IsAuthenticated, )


class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    permission_classes = (permissions.IsAuthenticated,)
    # how to show an error if the user is not authenticated?
