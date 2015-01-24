requirejs.config({
	baseUrl: "js/",
	paths: {
		jquery: 'lib/jquery-1.11.1',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
  	}
});
requirejs([
    'jquery',
    'underscore',
    'backbone',
    'views/View',
    'models/Manager'
  ], function($,_,Backbone,View,Manager) {

  var Router = Backbone.Router.extend({
    routes: {
      "": "main"
    },
    main: function(){
    	console.log('Router');
    	var View = new View();
    }
  });
	var router = new Router();
	Backbone.history.start();
});
