var collectionTodo, AppRouter;
define(['backbone', 'views/mainView', 'collections/itemCollection', 'views/itemCollectionView', 'views/detailView'],
    function( Backbone, MainView, ItemCollection, ItemCollectionView, DetailView ){

        var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'detail/:slug': 'detail'
        },

        initialize: function(){
            this.collection =  new ItemCollection();
            collectionTodo = this.collection;
            var mainView = new MainView( this.collection );
        },

        index: function(){
            var itemCollectionView = new ItemCollectionView();
        },

        detail: function( slug ){
            var collection = this.collection.filterBySlug( slug );
            var detailView = new DetailView( collection );
        }
    });
    return AppRouter;
});