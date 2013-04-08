
define([
    'jquery',
    'bootstrap',
    'backbone',
    'underscore',
    'models/itemModel',
    'collections/itemCollection',
    'views/itemView',
    'views/detailView'],
    function($, _bootstrap, Backbone, _, Item, ItemCollection, ItemView, DetailView ){

    var ItemCollectionView = Backbone.View.extend({
        el: '#todo-list',
        ObjModal: $('#ItemModal'),

        initialize: function() {
            this.collection = collectionTodo;
            this.render();
        },

        events: {
            "click a.more": "openDescription",
            "click a.img-shadow": "detailView"
        },

        render: function() {
            this.$el.empty();

            this.collection.each( function( item, index ) {
                this.renderItem( item );
                if( index == this.collection.length -1 ){
                    this.showProducts(0);
                }
            }, this);
        },

        renderItem: function( item ) {
            var itemView = new ItemView( { model: item } );
            this.$el.append( itemView.render().el );
        },

        showProducts: function( value ){
            selector = this;
            liProducts = selector.$el.find('li');
            len = liProducts.length;

            selector.$el.find('li:eq(' + value + ')').fadeIn('fast', function(){
                if( len > value + 1 ){
                    selector.showProducts( value + 1 );
                }
            });
        },

        detailView: function(ev){
            selfa = this.$el;
            var slug = $(ev.target).data('item');
            var collection = collectionTodo.filterBySlug( slug );

            var detailView = new DetailView( collection );
        },

        openDescription: function(ev){
            ev.preventDefault();
            this.ObjModal.find('.title').html($(ev.target).data('item'));
            this.ObjModal.find('.modal-body').html($(ev.target).data('content'));
            this.ObjModal.modal();
        }
    });
    return ItemCollectionView;
});