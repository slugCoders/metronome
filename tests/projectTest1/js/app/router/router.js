define(function(require){
  "use strict";
  var Backbone = require('backbone'),
      MainView = require('app/views/view'),
      Manager = require('app/models/manager');
      
      /* En cas de necessitar utilitzar les llibreries jquery o underscore s'han de declarar
       $ = require('jquery'),
      _ = require('underscore'),*/
  return Backbone.Router.extend({
      routes: {
        /*define the routes, when web page is in index is executed main function */
        "": "main",
      },
      main: function(){
          console.log('Router');
          var mainView = new MainView({model:new Manager()});
      }
  });
});
