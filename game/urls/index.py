import imp
from socket import IP_DEFAULT_MULTICAST_LOOP
from django.urls import path, include
from game.views.index import index
from game.views.settings.logout import logout


urlpatterns = [
    path("", index, name = "index"),
    path("menu/", include("game.urls.menu.index")),
    path("playground/", include("game.urls.playground.index")),
    path("settings/", include("game.urls.settings.index")),
]
