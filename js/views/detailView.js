define(function (require, exports, module) {

    var Backbone = require('backbone'),
        ItemModel = require('models/itemModel'),
        Template = require('text!/templates/detail_template.html');

    var DetailView = Backbone.View.extend({
        el: '#todo-list',
        productInfo: $('.product_info'),

        tagName: 'li',
        model: ItemModel,

        events: {
            "click #back": "backToList"
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            var compiledTemplate = _.template( Template, this.collection[0].toJSON() );
            var container = this.$el;
            this.$el.html( compiledTemplate );
            this.$el.find('li').fadeIn('slow', function(){
                container.find('.info').fadeIn('slow');
            });
        },

        backToList: function(ev){
            $('#clear').trigger('click');
        }
    });

    module.exports = DetailView;
});
