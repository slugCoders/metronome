$(function(){
	var AppView = Backbone.View.extend({
		el: $("#metronomeApp"),
		events: {
      		"click .play"   : "play",
      		"change .tempo"  : "play",
    	}
    	play: function(){

    	}
	});
	var App = new AppView();
});