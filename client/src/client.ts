/**
 * Created by hakesson on 12/01/2016.
 */

///<reference path="../../libs/mithril/mithril.d.ts" />

import mithril = require('mithril');

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