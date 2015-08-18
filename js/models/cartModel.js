define( function (require, exports, module){

    var Backbone = require("backbone");
    var LocalStorage = require("localstorage");
    var ItemModel = require("models/itemModel");


    var Cart = Backbone.Model.extend({
        defaults:{
            product: new ItemModel(),
            quantity: ''
        },

        //localStorage: new Store("Cart"),
        // localStorage: new Backbone.LocalStorage("Cart"),

        initialize: function(){
            //  this.fetch();
            //  console.log(this.localStorage.findAll());
        }
    });

    module.exports = Cart;
});
