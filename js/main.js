// Kick off the application.
require(["app", "router"], function(app, Router){
  // Define your master router on the application namespace and trigger all
  // navigation from this instance.
  app.router = new Router();

  // Trigger the initial route and enable HTML5 History API support, set the
  // root folder to '/' by default.  Change in app.js.
  Backbone.history.start({ pushState: false, root: app.root });

  /*$(function() {
    // Update address bar URL
    $('a').on('click', function(e) {
      e.preventDefault();
      console.log(e.target.getAttribute('href'));
      app.router.navigate(e.target.getAttribute('href'), true);
    });

  });*/
});



/*

require(
    ['views/cartView',
    'routers/router'],
    function( Cart, AppRouter ) {
            var appRouter = new AppRouter();
            Backbone.history.start( { pushState: true } );

    }
);
*/

