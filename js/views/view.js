define([
    'lib/jquery-1.11.1',
    'lib/underscore',
    'lib/backbone',
    'models/manager'
  ], function($,_,Backbone, Manager){
	var View = Backbone.View.extend({
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
	return View;
});