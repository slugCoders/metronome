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
      },
      var initialize = function(){
        var View = new View();
      },
      main: function(){
        console.log('Router');
      }
    });
    var router = new Router();
});
