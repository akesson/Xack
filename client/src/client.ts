/// <reference path="components/HeaderComponent.ts" />
///<reference path="../../libs/mithril/mithril.d.ts" />


var header = new UIComponents.HeaderComponent("header");

console.log("hello from " + header.name );

var app = {

    Client: function(data: any) {
    },
    controller: function() {
    },

    //here's the view
    view: function(ctrl: any) {
        return [
            m("h1", {}, "hello again"),
            m("button", {}, "A button")
        ];
    },
};

//initialize the application
m.module(document.getElementById("appRoot"), app);