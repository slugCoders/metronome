// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
  "baseUrl": "js/lib",
  "paths": {
    "app": "../app",
    "underscore": 'underscore',
    "backbone": 'backbone'
  },
  "shim": {
   "underscore": {
     "exports": '_'
   },
   "backbone": {
     "deps": [
       'underscore',
       'jquery-1.11.2.min'
     ],
     exports: 'Backbone'
   },
   "jquery.alpha": ["jquery-1.11.2.min"],
   "jquery.beta": ["jquery-1.11.2.min"]
  }
});
// Load the main app module to start the app
requirejs(["app/router/router"]);