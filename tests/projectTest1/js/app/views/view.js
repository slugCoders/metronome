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
			"click .up1" : function (e){
				this.count(e);
				this.up1(e)	
			},
			"click .up5" : function (e){
				this.count(e);
				this.up5(e)				
			},
			"click .down1" : function (e){
				this.count(e);
				this.down1(e)	
			},
			"click .down5" : function (e){
				this.count(e);
				this.down5(e)				
			},

			/*"change #tempo": "play",
			"click #stop": "stop"*/
		},
		count: function(){
				i = i +1;
		},
		play: function(){
				console.log("PLAY");
				this.model.startPlayingRithm();
		},
		up1 : function(){
				self=this;
				setTimeout(function(){
					self.model.modTempo(i);
					i=0		
		 		},1000);					
		},
		up5 : function(){
				self=this;
				setTimeout(function(){
					self.model.modTempo(i*5);
					i=0		
				},1000);
				console.log("+5");			
		},
		down1 : function(){
				self=this;
				setTimeout(function(){
					self.model.modTempo(-i);
					i=0		
				},1000);
		},
		down5 : function(){
				self=this;
				setTimeout(function(){
					self.model.modTempo(-i*5);
					i=0		
				},1000);		
		},

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