define([
    "underscore",
    "backbone",
    "app/models/manager",
    "jquery-1.11.2.min",
    "jquery.alpha",
    "jquery.beta"
  ],
  function(_,Backbone,Manager,$){
	var MainView = Backbone.View.extend({
		el:$("#metronomeApp"),
		events: {
			"click #play": "play",
			"change #tempo": "play"
		},
		initialize: function(){
			console.log("View");
			this.model = new Manager();
			this.model.start();
		},
		play: function(){
			console.log("PLAY");
			model.start();
		}
	});
	return MainView;
});