/**
 * Created by hakesson on 11/01/2016.
 */

var app = {};

app.controller = function() {
    return;
};

app.view = function(ctrl) {
    return [
        m("p", {}, "hello")
    ];
};

m.module(document.getElementById("helloId"), app);