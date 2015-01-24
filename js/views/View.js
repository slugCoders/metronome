$(function(){
	var Manager = new Manager;
	var AppView = Backbone.View.extend({
		el: $(".metronomeApp"),
		events: {
      		"click #play": "play",
      		"change #tempo": "play"
    	},
    	play: function(){
    		console.log("PLAY");
    		Manager.start();
    	}
	});
	var App = new AppView;
});