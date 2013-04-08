define(['backbone', 'localStorage', 'models/cartModel', 'views/cartView'],
    function(Backbone, localstorage, Cart, CartView){

    var CartCollection = Backbone.Collection.extend({
        div: "#cart-info",
        model: Cart,

        localStorage: new Store('CartCollection'),

        filterById: function(id){
            for( i = 0 ; i < this.length; i++ ){
                if(this.models[i].attributes.product.id == id){
                    return this.models[i];
                }
            }
            return "";
        }
    });

    return CartCollection;
});