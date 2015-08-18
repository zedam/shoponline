require.config({
  paths: {
    'jquery': 'lib/jquery-1.9.0.min',
    'underscore': 'lib/underscore-min',
    'backbone': 'lib/backbone-min',
    'text': 'lib/text',
    'bootstrap': 'lib/bootstrap.min',
    "localStorage": 'lib/backbone.localStorage-min'
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
  },

  deps: ["main"]

});
