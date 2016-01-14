/// <reference path="components/HeaderComponent.ts" />
/// <reference path="../../libs/mithril/mithril.d.ts" />


var header = new UIComponents.HeaderComponent("menubar");

var app = {
    controller: function() {
    },

    //here's the view
    view: function(ctrl: any) {
        return [
            m("h1", {}, "hello again"),
            m("button", {}, "A button"),
            m.component(header, {})
        ];
    },
};

//initialize the application
m.module(document.getElementById("appRoot"), app);

var tasks = m.prop([]);
var onDataLoad = function(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].name);
    }

};

var consoleLog = function(value) {
    console.log(value);
    return value;
};

m.request({method: 'GET', url: '/data.json'})
    .then(tasks)
    .then(consoleLog)
    .then(onDataLoad);
