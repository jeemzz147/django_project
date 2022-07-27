class CharField {
    constructor(playground) {
        this.playground = playground;
        this.$history = $(`<div class="ac-game-chat-field-history">历史记录</div>`);
        this.$input = $(`<input type="text" class="ac-game-chat-field-input">`);
        
        this.$history.hide();
        this.$input.hide();
        this.func_id = null;

        this.playground.$playground.append(this.$history);
        this.playground.$playground.append(this.$input);

        this.start();

    }


    start() {
        this.add_listening_events();
    }


    add_listening_events() {
        let outer = this;
        this.$input.keydown(function (e) {
            if (e.which === 27) { // esc
                outer.hide_input();
                return false;
            } else if (e.which === 13) {
                let username = outer.playground.root.settings.username;
                let text = outer.$input.val();
                if (text) {
                    outer.$input.val("");
                    outer.add_message(username, text);
                    outer.playground.mps.send_message(username, text);
                }
                return false;
            }
        });
    }

    render_message(message) {
        return $(`<div>${message}</div>`);
    }

    add_message(username, text) {
        this.show_history();
        let message = `[${username}]${text}`;
        this.$history.append(this.render_message(message));
        this.$history.scrollTop(this.$history[0].scrollHeight);
    }


    show_history() {
        let outer = this;
        this.$history.fadeIn();

        if (this.func_id) clearTimeout(this.func_id);

        this.func_id = setTimeout(function () {
            outer.$history.fadeOut();
            outer.func_id = null;
        }, 6000);
    }

    show_input() {
        this.show_history();

        this.$input.show();
        this.$input.focus();
    }

    hide_input() {
        // console.log("hide input!!!");
        this.$input.hide();
        this.playground.game_map.$canvas.focus();
    }
}