
define(
    ['jquery',
    'backbone',
    'underscore',
    'views/itemCollectionView',
    'collections/itemCollection',
    'routers/router']
    , function( $, Backbone, _, ItemCollectionView, ItemCollection, AppRouter ){

    var MainView = Backbone.View.extend({
        el: "body",
        filterInput: $('#filterInput'),
        initialize: function(collection){
            this.collection = collection;
        },

        events: {
            "click .add-on": "filterItems",
            "click #clear": "clearFilter",
            "click .door": "openHelp",
            "click #cart-container": "openCart"
        },

        filterItems: function(e) {
            var name = this.filterInput.val();

            if( name.length > 0 ){
                var filtered = this.collection.filterByName( name );
                new ItemCollectionView( filtered );
            }else{
                new ItemCollectionView( this.collection );
            }
        },

        clearFilter: function(e) {
            e.preventDefault();
            this.filterInput.val('');
            new ItemCollectionView( this.collection );
        },

        openHelp: function(e){
            e.preventDefault();
            $(e.target).parent().find('ul').slideToggle('slow');
        },

        openCart: function(){
            $('#cart-info').slideToggle('fast').toggleClass('active');
        }
    });
    return MainView;
});