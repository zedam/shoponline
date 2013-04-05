define(['backbone', 'models/itemModel'], function(Backbone, Item){

    var Cart = Backbone.Model.extend({
        defaults:{
            product: new Item(),
            quantity: ''
        }
    });

    return Cart;
});