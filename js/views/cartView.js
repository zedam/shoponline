define(
    ['jquery',
    'backbone',
    'underscore',
    'models/cartModel',
    'models/itemModel',
    'collections/cartCollection',
    'collections/itemCollection',
    'views/cartItemView',
    'text!/templates/cart_total.html'],
    function($, Backbone, _, Cart, Item, CartCollection, ItemCollection, CartItemView, Template ){

    var CartView = Backbone.View.extend({

        el: "body",
        div: $("#cart-info"),
        cartItems: $('#cart-items'),
        cartAmount: $('#cart-amount'),
        events: {
            "click .addToCart": "addToCart",
            "click #cart-info button": "removeFromCart"
        },

        initialize: function(){
            this.collection = new CartCollection();
            this.collection.on( "change", this.render, this );
        },

        render: function() {
            this.div.empty();
            var counter = 0;
            var counterAmount = 0;
            if(this.collection.length > 0 ){
                this.collection.each(function(item, index) {

                    var quantity = this.round2decimals(item.attributes.quantity);
                    var price = this.round2decimals(item.attributes.product.attributes.price);

                    counter += quantity;
                    counterAmount += quantity * price;

                    this.renderItem(item);
                }, this);
            };
            this.updateCart(counter, counterAmount);
        },

        renderItem: function( item ) {
            var cartItemView = new CartItemView( { model: item } );
        },

        round2decimals: function(value){
            var result = Math.round(parseFloat(value) * 100) / 100;
            return result;
        },

        addToCart: function(ev){
            ev.preventDefault();
            var id = $(ev.target).data('item');

            /**** I retrieve the product from the collection ****/
            var collectionItemById = collectionTodo.filterById(id);

            /**** I get the stock of the product ****/
            var stockItemById = collectionItemById.get('stock');

            /**** If there is some product availabe... ****/
            if( stockItemById > 0 ){

                /**** If my product exists in the cart, I filter to update quantity ****/
                var collectionCartById = (this.collection.length > 0) ? this.collection.filterById(id) : '';

                if(collectionCartById != ''){
                    var qty = parseInt(collectionCartById.get('quantity'));
                    qty ++;

                    collectionCartById.set('quantity', qty);
                    console.log(this.collection);
                }else{
                    /**** I create a new item in the collection if this one is empty ****/
                    this.collection.add({ quantity: '1', product: collectionItemById  });
                }

                this.render();

                this.updateStock(id);

            } else {
                /**** if there is no stock  / we could put some notifications and do it nicer... ****/
                alert('not enought stock');
            }
        },

        removeFromCart: function(ev){
            var id = $(ev.target).data('item');

            /**** I filter to know which product to remove from the cart ****/
            var collectionById = this.collection.filterById(id);

            /**** I need the stocks in the cart and in the online store to calculate the final one. ****/
            stockInCart = collectionById.get('quantity');
            stockInCollection = collectionTodo.filterById(id).get('stock');

            finalStock = stockInCart + stockInCollection;

            /**** I set the final Stock. ****/
            var setProductStock = collectionTodo.filterById(id).set({ stock: finalStock });

            /**** and I update the visual content fot the stock of the product ****/
            this.updateScene(id, finalStock);

            var collection = this.collection;

            /**** I delete the visual Cart ****/
            Render = this;
            $(ev.target).parents('ul').slideUp('slow', function(){
                Render.render();
            });
                collection.remove(collectionById);
        },

        updateCart: function( counter, counterAmount ){
            /**** Updates the visual Cart Info ****/
            counterAmount = this.round2decimals(counterAmount);

            /**** values of quantity of items and amounts to pay ****/
            this.cartItems.html(counter);
            this.cartAmount.html(counterAmount);

            var TemplateQty = _.template( Template, { qty: counter, amount: counterAmount} );
            this.div.append(TemplateQty);

            ( counter == 0 ) ? this.div.removeClass('active') : this.div.addClass('active');
        },

        updateStock: function( id ){

            /**** we update the stock for the product while
                  we are adding product to the shopping cart  ****/

            var filterById = collectionTodo.filterById(id);
            var stock = filterById.get('stock');
            stock --;
            collectionTodo.filterById(id).set('stock', stock);
            this.updateScene(id, stock);
        },

        updateScene: function(id, stock){
            $('li').data('item', id).find('#stock').html(stock);
        }

    });

    return CartView;
});