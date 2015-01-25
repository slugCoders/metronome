define([
	'underscore',
	'backbone'
	], function(_, Backbone) {
	var Manager = Backbone.Model.extend({

		defaults: function(){
			return {
				tempo: null,
				rythm: null,
				volume: null,
				beat: null,
				sound: null
			};
		},

		start: function(){
			console.log("PLAY Manager");
		},
		stop: function(){
			//TODO
		},

		loadSound:function (url) {
			var request = new XMLHttpRequest();
			request.open('GET', url, true);
			request.responseType = 'arraybuffer';
			
			request.onload = function() {
	    	//request.response is encoded... so decode it now
	    		context.decodeAudioData(request.response, function(buffer) {
	    	    sound = buffer;
	    		}, function(err) {
	      		throw new Error(err);
	    		});
	  		}
			request.send();
		},

		playSound: function(buffer, time) {
	    	var source = context.createBufferSource();
	    	source.buffer = buffer;
	    	source.connect(context.destination);
	    	if (!source.start)
	      		source.start = source.noteOn;
			source.start(time);
		}
	}); 
	return Manager;
});