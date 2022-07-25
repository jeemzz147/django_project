export class AcGame {
    constructor(id, AcWingOS) {
        console.log(AcWingOS);
        this.id = id;
        this.$ac_game = $('#' + id);
        this.AcWingOS = AcWingOS;

        this.settings = new Settings(this);

        console.log("create settings in acgame!!!");
        this.menu = new AcGameMenu(this);
        console.log("create menu in acgame!!!");
        this.playground = new AcGamePlayground(this);

        console.log("create playground in acgame!!!");

        this.start()
    }

    start() {
    
    }
}
