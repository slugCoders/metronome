// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
require.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app',
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
  }
});
require(['jquery', 'backbone', 'app/router/router'], function ($, Backbone, Router) {
  var router = new Router();
  Backbone.history.start();
});