from django.http import HttpResponse




def index(request):
    line1 = '<h1 style="text-align: center">绝地求生</h1>'
    line4 = '<a href="/play/">进入游戏界面</a>'
    line3 = '<hr>'
    line2 = '<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftu1.whhost.net%2Fuploads%2F20181130%2F17%2F1543570700-NLjXucVkqA.jpg&refer=http%3A%2F%2Ftu1.whhost.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660809310&t=c40f0653fd7fa42a940d30aae1ed1415" width = 1500>'
    return HttpResponse(line1 + line4 + line3 + line2)

def play(request):
    line1 = '<h1 style="text-align: center">游戏界面</h1>'
    line3 = '<a href="/">返回主页面</a>'
    line2 = '<img src="https://img1.baidu.com/it/u=3313682859,2079707202&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" width = 2000>'
    return HttpResponse(line1 + line3 + line2)
