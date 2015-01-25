define([
    "underscore",
    "backbone",
    "app/views/view",
     "jquery-1.11.2.min",
    "jquery.alpha",
    "jquery.beta"
  ], function(_,Backbone,MainView,Manager,$) {
    var Router = Backbone.Router.extend({
      routes: {
        "": "main"
      }
    });
    var initialize = function(){
        var router = new Router;
        router.on('main',function(){
          var view = new MainView;
          console.log('Router');
        });
        Backbone.history.start();
    };
    return {
       initialize: initialize
    };
});
