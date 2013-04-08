/**
 * Created with JetBrains WebStorm.
 * User: izigelbaum
 * Date: 28/03/13
 * Time: 16:15
 * To change this template use File | Settings | File Templates.
 */

define(['backbone', 'models/itemModel'],
    function(Backbone, Item) {

    var ItemCollection = Backbone.Collection.extend({
        defaults: {
            model: Item
        },
        model: Item,
        url: 'json/items.json',

        initialize: function(){
            this.fetch( { async: false } );
        },

        parse: function(response, xhr) {
            return response.items;
        },

        filterBySlug: function( sl ) {
            return filtered = this.filter(function(data) {
                return data.get('slug') == sl;
            });
        },

        filterByName: function( name ){
            filtered = this.filter(function(data) {
                if(data.get("name").toLowerCase().indexOf(name) > -1){
                    return data;
                }
            });
            return new ItemCollection(filtered);
        },

        filterById: function(id){
            return this.get(id);
        }
    });

    return ItemCollection;
});



