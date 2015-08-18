
define(
    /*
        ['models/itemModel',
        'collections/itemCollection',
        'views/itemView',
        'views/detailView'],
    */
function(require, exports, module){
    /* Item, ItemCollection, ItemView, DetailView */

    var Backbone = require("backbone"),
        ItemView = require("views/itemView"),
        DetailView = require("views/detailView");

    var ItemCollectionView = Backbone.View.extend({
        el: '#todo-list',
        ObjModal: $('#ItemModal'),

        initialize: function() {
            this.render();
            this.listenTo(this.collection, 'change', this.render);
        },

        events: {
            "click a.more": "openDescription",
            "click a.img-shadow": "detailView"
        },

        render: function() {
            this.$el.empty();

            this.collection.each( function (item, index) {
                this.renderItem( item );

                if (index == this.collection.length - 1){
                    this.showProducts(0);
                }

            }, this);
        },

        renderItem: function( item ) {
            var itemView = new ItemView({
                model: item
            });

            this.$el.append( itemView.render().el );
        },

        showProducts: function( value ){
            $this = this;
            var productItem = this.$el.find('li');
            len = productItem.length;

            this.$el.find('li:eq(' + value + ')').fadeIn('fast', function(){
                if( len > value + 1 ){
                    $this.showProducts( value + 1 );
                }
            });
        },

        detailView: function(ev){
            selfa = this.$el;
            var slug = $(ev.target).data('item');
            var collection = this.collection.filterBySlug( slug );

            var detailView = new DetailView( collection );
        },

        openDescription: function(ev){
            ev.preventDefault();
            this.ObjModal.find('.title').html($(ev.target).data('item'));
            this.ObjModal.find('.modal-body').html($(ev.target).data('content'));
            this.ObjModal.modal();
        }
    });

    module.exports = ItemCollectionView;
});
