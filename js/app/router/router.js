define(function(require){
  "use strict";
  var $ = require('jquery'),
      _ = require('underscore'),
      Backbone = require('backbone'),
      MainView = require('app/views/view'),
      mainView = new MainView;

  return Backbone.Router.extend({
      routes: {
        "": "main"
      },
      main: function(){
          console.log('Router');
      }
  });
});
