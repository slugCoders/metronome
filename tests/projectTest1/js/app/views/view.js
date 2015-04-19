define(function(require){
	"use strict";
	
	var $ = require('jquery'),
    	_ = require('underscore'),
    	Backbone = require("backbone"),
    	Manager = require('app/models/manager');
  		
	var View = Backbone.View.extend({
		el:$(".container"),
		/* init events, when user click element with 
			id play or change the element with id tempo 
			view class execute function play
		*/
		
		events: {
			"click .play": "play"
			/*"change #tempo": "play",
			"click #stop": "stop"*/
		},
		play: function(){
			console.log("PLAY");
			this.model.startPlayingRithm();
		}
	});
	return new View({model:Manager});
});