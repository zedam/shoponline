define(['backbone', 'text!/templates/cart_item.html'],
    function(Backbone, Template) {

        var CartItemView = Backbone.View.extend({
            el: '#cart-info',
            tagName: "li",
            className: "view",
            initialize: function(){
                this.render();
            },

            render: function() {
                var compiledTemplate = _.template( Template, this.model.toJSON() );

                this.$el.append(compiledTemplate);
            }
        });
        return CartItemView;
    });