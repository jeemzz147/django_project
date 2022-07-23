from django.contrib.auth import login
from django.http import JsonResponse
from django.contrib.auth.models import User
from game.models.player.player import Player


def register(request):
    data = request.GET
    username = data.get("username", "").strip()
    password = data.get("password", "").strip()
    password_confirm = data.get("password_confirm", "").strip()
    if not username or not password:
        return JsonResponse({
            'result': "用户名和密码不能为空"
        })
    if password != password_confirm:
        return JsonResponse({
            'result': "两个密码不一致",
        })
    if User.objects.filter(username = username).exists():
        return JsonResponse({
            'result': "用户名已存在"
        })

    user = User(username = username)
    user.set_password(password)
    user.save()
    Player.objects.create(user = user, photo = "https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2FsQt1SVSd3qdaHbqV925bwm6DlRIbDJZ9tnx5%3DMMpb7kPY1556274862414.jpg&thumbnail=650x2147483647&quality=80&type=jpg")
    login(request, user)
    return JsonResponse({
        'result': "success"
    })