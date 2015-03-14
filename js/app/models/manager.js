define(function(require){
    var $ = require('jquery'),
    	_ = require('underscore'),
    	Backbone = require('backbone');
	
	return Backbone.Model.extend({

		defaults: function(){
			/*This method is executed when model is instanciatet*/
			return {
				tempo: null,
				rythm: null,
				volume: null,
				beat: null,
				sound: null
			};
		},

		play: function(){
			console.log("PLAY Manager");
		},
		stop: function(){
			//TODO
		},

		loadSound:function (url) {
			/*WEB AUDIO*/
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
			/*WEB AUDIO*/
	    	var source = context.createBufferSource();
	    	source.buffer = buffer;
	    	source.connect(context.destination);
	    	if (!source.start)
	      		source.start = source.noteOn;
			source.start(time);
		}
	}); 
});