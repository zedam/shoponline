
define(
    ['jquery',
    'backbone',
    'underscore',
    'views/itemCollectionView',
    'collections/itemCollection']
    , function( $, Backbone, _, ItemCollectionView, ItemCollection ){

    var MainView = Backbone.View.extend({
        el: "body",
        filterInput: $('#filterInput'),
        initialize: function(){
            this.collection = collectionTodo;
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
            $('#cart-info').slideToggle('slow').toggleClass('active');
        }
    });
    return MainView;

});