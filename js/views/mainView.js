define(function(require, exports, module){

    var Backbone = require("backbone"),
        ItemCollectionView = require("views/itemCollectionView"),
        CartCollection = require('collections/cartCollection'),
        CartView = require('views/CartView');

    var MainView = Backbone.View.extend({
        el: "body",
        filterInput: $('#filterInput'),

        initialize: function (){
            var cartCollection = new CartCollection();
            var cartView = new CartView({
                collection: cartCollection
            });
            //console.log(this.collection);
        },

        events: {
            "change #filterInput": "filterItems",
            "click .add-on": "filterItems",
            "click #clear": "clearFilter",
            "click .door": "openHelp",
            "click #cart-container": "openCart"
        },

        filterItems: function(e) {
            var name = this.filterInput.val(),
                filtered = this.collection.filterByName( name );

            new ItemCollectionView({
                collection: filtered
            });
        },

        clearFilter: function(e) {
            e.preventDefault();
            this.filterInput.val('');

            new ItemCollectionView({
                collection:  this.collection
            });
        },

        openHelp: function(e){
            e.preventDefault();
            $(e.target).parent().find('ul').slideToggle('slow');
        },

        openCart: function(){
            $('#cart-info').slideToggle('slow').toggleClass('active');
        }
    });

    module.exports = MainView;
});

