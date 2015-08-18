define(function (require, exports, module) {
    var Backbone = require("backbone");

    Item = Backbone.Model.extend({
        defaults: {
            "id": "",
            "name": "",
            "description": "",
            "slug": "",
            "img": "",
            "price": "",
            "code": "",
            "category": ""
        },
        url: 'json/item.json'
    });

    module.exports = Item;
});
