
define(function (require, exports, module) {

    var Backbone = require("backbone");
    var ItemModel = require("models/itemModel");

    var ItemCollection = Backbone.Collection.extend({
        model: ItemModel,
        url: '/json/items.json',

        initialize: function(){
            this.fetch({
                async: false
            });
        },

        parse: function (response, xhr) {
            return response.items;
        },

        filterBySlug: function (slug) {
            var filtered = this.filter(function (data) {
                return data.get('slug') == slug;
            });
            return filtered;
        },

        filterByName: function ( name ){
            var filtered = this.filter(function (data) {
                return data.get("name").indexOf(name) > -1;
            });

            return new ItemCollection(filtered);
        },

        filterById: function (id) {
            return this.get(id);
        }
    });

    module.exports = ItemCollection;
});



