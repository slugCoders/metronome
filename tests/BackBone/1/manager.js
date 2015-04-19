define(function(require){
    var $ = require('jquery'),
    BufferLoader = require('buffer-loader'),
    	_ = require('underscore'),
    	Backbone = require('backbone');
	
	return Backbone.Model.extend({

		defaults: function(){
			return {
				tempo: null,
				rythm: null,
				volume: null,
				beat: null,
				sound: null
			};
		},
		// Function L Define context for compatible browsers, and load 2 sounds using BufferLoader Class.
		init: function () {  
			console.log ("estic a Load soud");  
			try {
		        context = new AudioContext();
		    }
		    catch(e) {
		        alert("Web Audio API is not supported in this browser");
		    }
		    
		    // Start loading sounds (beep).
		    bufferLoader = new BufferLoader(context,["audio/beep1.wav","audio/beep2.wav"],bufferLoadCompleted);
		    bufferLoader.load();

			function bufferLoadCompleted() {
			    // Agafa el sons de l'array bufferList i els asigna a les variables globals beep.
			    var bufferList = bufferLoader.bufferList
			    beep1 = bufferList[0];
			    beep2 = bufferList[1];       
			}
		},
		stop: function(){
			//TODO
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
});
