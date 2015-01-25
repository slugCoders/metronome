define([
    'jquery',
    'underscore',
    'backbone',
    'views/view',
    'models/manager'
  ], function($,_,Backbone,View,Manager) {
    var Router = Backbone.Router.extend({
      routes: {
        "": "main"
      }
    });
    var initialize = function(){
        var router = new Router;
        router.on('main',function(){
          var view = new View;
          console.log('Router');
        });
        Backbone.history.start();
    };
    return {
       initialize: initialize
    };
});
