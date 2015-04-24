define(function(require){
	"use strict";
	
	var $ = require('jquery'),
    	_ = require('underscore'),
    	Backbone = require("backbone"),
    	Manager = require('app/models/manager');
  		
	
    	var i=0;
    		
	var View = Backbone.View.extend({
		el:$(".container"),
		/* init events, when user click element with 
			id play or change the element with id tempo 
			view class execute function play
		*/
		
		events: {
			"click .play": "play",
			"click .stop": "stop",
			"click .up" : "changeTempo",
			"click .down" : "changeTempo"
		},

		play: function(){
			console.log("PLAY");
			this.model.startPlayingRithm();
		},
		stop: function(){
			console.log("STOP");
			this.model.stopMetronome();
		},
		changeTempo: function(e){
			console.log($(e.currentTarget).attr('value'));
			i = parseInt($(e.currentTarget).attr('value'));
			this.model.modTempo(i);
		}
	});
	return new View({model:Manager});
});

// Trigger two functions in one Event.
/*
"click .play": function(e) {
        	this.play(e);
        	this.up1(e);
    		},
*/