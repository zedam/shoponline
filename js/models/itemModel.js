/**
 * Created with JetBrains WebStorm.
 * User: izigelbaum
 * Date: 28/03/13
 * Time: 16:15
 * To change this template use File | Settings | File Templates.
 */

define(["backbone"], function( Backbone ){

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
        }
    });
    return Item;
});
