require([
    'lib/jquery',
    'lib/backbone',
    'models/Manager',
    'views/View'
  ], function($, Backbone, Manager, View) {

  var Router = Backbone.Router.extend({
    routes: {
      "": "main"
    },
    main: function(){
      var View = new View;
    }
  });