
class HeaderComponent {
    constructor(name) {
        this.name = name;
    }

    view() {
        return m("h1", {}, "header " + this.name);
    }

    controller() {
    }
}

export { HeaderComponent };