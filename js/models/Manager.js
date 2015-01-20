
var Manager = Backbone.Model.extend({function(){

	defaults: function(){
		return {
			tempo: null,
			rythm: null,
			volume: null,
			beat: null,
			sound: null
		};
	}

	start: function(){
		//TODO
	}
	stop: function(){
		//TODO
	}

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
	}

}); 