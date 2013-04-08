define(['backbone', 'localStorage', 'models/itemModel'], function(Backbone, LocalStorage, Item){

    var Cart = Backbone.Model.extend({
        defaults:{
            product: new Item(),
            quantity: ''
        },

        //localStorage: new Store("Cart"),
        // localStorage: new Backbone.LocalStorage("Cart"),

        initialize: function(){
          //  this.fetch();
          //  console.log(this.localStorage.findAll());
        }
    });

    return Cart;
});