define(function(require){
	"use strict";
	
	var $ = require('jquery'),
    	_ = require('underscore'),
    	Backbone = require("backbone"),
    	Manager = require('app/models/manager');
  		
	return Backbone.View.extend({
		el:$("#metronomeApp"),
		/* init events, when user click element with 
			id play or change the element with id tempo 
			view class execute function play
		*/
		events: {
			"click #play": "play",
			"change #tempo": "play"
		},
		initialize: function(){
			console.log("View");
			var manager = new Manager;
			this.model = manager;
		},
		play: function(){
			console.log("PLAY");
			this.model.play();
		}
	});
});