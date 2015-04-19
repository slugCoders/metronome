// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
require.config({
  baseUrl: 'js/lib',
  paths: {
    "app": '../app'
  },
  shim: {
   underscore: {
     exports: '_'
   },
   backbone: {
     deps: [
       'underscore',
       'jquery'
     ],
     exports: 'backbone'
   },
   bootsrap:{
    deps:[
      'jquery'
    ],
    exports: 'bootsrap'
   }
  }
});

/*Init app without view*/
require(['jquery', 'backbone', 'app/views/view','app/models/manager'], function ($, Backbone, View, Manager) {
  var view = View;
  Backbone.history.start();
});

/*require(['jquery', 'backbone', 'app/router/router'], function ($, Backbone, Router) {
  var router = new Router();
  Backbone.history.start();
});*/