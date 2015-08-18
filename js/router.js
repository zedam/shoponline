//var collectionTodo, AppRouter;
/*
define([
      'views/mainView'
      /!*'collections/itemCollection',
      'views/itemCollectionView',
      'views/detailView'*!/
  ],
    function( MainView, ItemCollection, ItemCollectionView, DetailView ){

     /!*   AppRouter = Backbone.Router.extend({
            routes: {
                '': 'index',
                'detail/:slug': 'detail'
            },

            index: function(){
                console.log('routed');
                /!*
                this.collection =  new ItemCollection();
                collectionTodo = this.collection;
                var itemCollectionView = new ItemCollectionView();
                var mainView = new MainView( this.collection );
                *!/
            },

            detail: function( slug ){
                console.log(slug);

                /!*
                var collection = this.collection.filterBySlug( slug );
                var detailView = new DetailView( collection );
                *!/
            }
        });
        return AppRouter;*!/
    });*/


define(function (require, exports, module) {
    "use strict";

    // External dependencies.
    var Backbone = require("backbone");
    var ItemCollection = require("collections/itemCollection");
    var ItemCollectionView = require("views/itemCollectionView");
    var MainView = require("views/mainView");

    // Defining the application router.
    var Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'detail/:slug': 'detail'
        },

        index: function () {
            var itemCollection = new ItemCollection(),
                itemCollectionView = new ItemCollectionView({
                    collection: itemCollection
                });

            var mainView = new MainView({
                collection: itemCollection
            });
        },

        detail: function (slug) {
            var DetailView = require('views/detailView'),
                itemCollection = new ItemCollection();

            var detailView = new DetailView({
                collection: itemCollection.filterBySlug(slug)
            });
        }
    });

    module.exports = Router;
});
