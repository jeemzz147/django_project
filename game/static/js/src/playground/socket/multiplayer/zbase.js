class MultiPlayerSocket {
    constructor(playerground) {
        this.playerground = playerground;
        this.ws = new WebSocket("wss://app2872.acapp.acwing.com.cn/wss/multiplayer/");

        this.start();
    }

    start() {

    }
}