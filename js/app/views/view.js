define(function(require){
	"use strict";
	
	var $ = require('jquery'),
    	_ = require('underscore'),
    	Backbone = require("backbone"),
    	Manager = require('app/models/manager'),
  		manager = new Manager;
	return Backbone.View.extend({
		el:$("#metronomeApp"),
		events: {
			"click #play": "play",
			"change #tempo": "play"
		},
		initialize: function(){
			console.log("View");
			this.model = manager;
			this.model.start();
		},
		play: function(){
			console.log("PLAY");
			this.model.start();
		}
	});
});