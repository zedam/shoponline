var collectionTodo, AppRouter;

define(['views/mainView', 'collections/itemCollection', 'views/itemCollectionView', 'views/detailView'],
    function( MainView, ItemCollection, ItemCollectionView, DetailView ){

        AppRouter = Backbone.Router.extend({
            routes: {
                '': 'index',
                'detail/:slug': 'detail'
            },



            index: function(){this.collection =  new ItemCollection();
                collectionTodo = this.collection;
                var itemCollectionView = new ItemCollectionView();
                var mainView = new MainView( this.collection );
            },

            detail: function( slug ){
                var collection = this.collection.filterBySlug( slug );
                var detailView = new DetailView( collection );
            }
        });
        return AppRouter;
    });
