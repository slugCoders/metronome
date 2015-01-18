
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

	}
	stop: function(){

	}

	loadSound:function (url) {
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.responseType = 'arraybuffer';
		//Falta repesar aquest metode perque es un event. Mirar si cal aquest event o podem posar el codi tal qual?
		//request.onload = function() {
    		// request.response is encoded... so decode it now
    	//	context.decodeAudioData(request.response, function(buffer) {
    	//	 sound = buffer;
    	//	}, function(err) {
      	//	throw new Error(err);
    	//	});
  		//}
		//request.send();
	}

}); 