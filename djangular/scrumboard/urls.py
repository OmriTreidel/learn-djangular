# from django.conf.urls import url
# from django.views.generic import TemplateView
#
# from .api import CardApi, ListApi
#
# urlpatterns = [
#     url(r'^lists$', ListApi.as_view()),
#     url(r'^cards$', CardApi.as_view()),
#     url(r'^home', TemplateView.as_view(template_name="scrumboard/home.html")),
#     url(r'^greet', TemplateView.as_view(template_name="scrumboard/greet.html")),
# ]

from .api import CardViewSet, ListViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'cards', CardViewSet)
router.register(r'lists', ListViewSet)

urlpatterns = router.urls