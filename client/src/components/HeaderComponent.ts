///<reference path="../../../libs/mithril/mithril.d.ts" />

module UIComponents {

    export class HeaderComponent {
        constructor(public name:string) {}

        view():any {
            return m("h1", {}, "header " + this.name);
        }

        controller():any {
        }
    }
}