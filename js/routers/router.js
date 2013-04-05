var collectionTodo, AppRouter;
define(['backbone', 'views/mainView', 'collections/itemCollection', 'views/itemCollectionView', 'views/detailView'],
    function( Backbone, MainView, ItemCollection, ItemCollectionView, DetailView ){

    AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'detail/:slug': 'detail'
        },

        initialize: function(){
            this.collection = (collectionTodo != null) ? collectionTodo : new ItemCollection();
            collectionTodo = this.collection;
            var mainView = new MainView( this.collection );

        },

        index: function(){
            var itemCollectionView = new ItemCollectionView(this.collection);
        },

        detail: function( slug ){
            var detailView = new DetailView( this.collection, slug );
        }
    });
    return AppRouter;
});