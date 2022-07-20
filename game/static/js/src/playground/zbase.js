class AcGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`<div>游戏界面</div>`);
        this.hide();
        this.root.$ac_game.append(this.$playground);

        this.start();
    }


    start() {
    }

    update() {
    }

    show() { // show playground
        this.$playground.show();
    }


    hide() { // close playground
        this.$playground.hide();
    }


}
