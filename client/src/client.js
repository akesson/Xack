/**
 * Created by hakesson on 11/01/2016.
 */

var app = {};

app.controller = function() {
    return;
};

app.view = function(ctrl) {
    return [
        m("h1", {}, "hello again"),
        m("button", {}, "A button")
    ];
};

m.module(document.getElementById("appRoot"), app);