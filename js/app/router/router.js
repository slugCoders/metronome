define([
    "jquery",
    "jquery.alpha",
    "jquery.beta",
    "underscore",
    "backbone",
    "app/views/view",
  ], function($,_,Backbone,MainView,Manager) {
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
