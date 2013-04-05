
define(
    ['jquery',
    'backbone',
    'underscore',
    'models/itemModel',
    'text!/templates/detail_template.html'],
    function($, Backbone, _, Item, Template){

    var DetailView = Backbone.View.extend({
        el: '#todo-list',
        productInfo: $('.product_info'),

        tagName: 'li',
        model: Item,

        events: {
            "click #back": "backToList"
        },

        initialize: function( collection, slug ) {

            _.bindAll(this, 'backToList');

            this.collection = collection;
            this.collection = collection.filterBySlug( slug );

            this.render();
        },


        render: function() {
            var compiledTemplate = _.template( Template, this.collection.models[0].toJSON() );
            container = this.$el;
            this.$el.html( compiledTemplate );
            this.$el.find('li').fadeIn('slow', function(){
                container.find('.info').fadeIn('slow');
            });
        },

        backToList: function(ev){
            ev.preventDefault();
            $('#clear').trigger('click');
        }
    });

    return DetailView;
});