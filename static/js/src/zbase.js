export class AcGame {
    constructor(id, AcWingOS) {
        this.id = id;
        this.$ac_game = $('#' + id);
        this.AcWingOS = AcWingOS;

        this.settings = new Settings(this);

        // console.log("create settings in acgame!!!");
        this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayground(this);

        this.start()
    }

    start() {
    
    }
}
