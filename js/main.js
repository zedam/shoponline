require.config({
    paths: {
        'jquery': 'lib/jquery-1.9.0.min',
        'underscore': 'lib/underscore-min',
        'backbone': 'lib/backbone-min',
        'text': 'lib/text',
        'bootstrap': 'lib/bootstrap.min'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['lib/underscore', 'jquery'],
            exports: 'Backbone'
        },
        'text': {
            exports: 'text'
        },
        'bootstrap':{
            deps: ['jquery']
        }
    }
});
require(
    ['jquery',
    'underscore',
    'backbone',
    'views/cartView',
    'routers/router'],
    function( $, _, Backbone, Cart, AppRouter ) {
        $(function() {
            var appRouter = new AppRouter();
            var cart = new Cart();
            Backbone.history.start();
        });
    }
);