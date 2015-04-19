define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');
// Audio Buffer Model (Classe AudioBUffer)

    return Backbone.Model.extend({
        

    	initialize : function (context,urlList,manager){
    		console.log("init BufferLoader");

    		// Attributes
    		this.context = context;
    	    this.urlList = urlList;
            this.Manager = manager;
            this.bufferList = new Array();
            this.loadCount = 0;
            this.load();
    	},
    	// Method Load
    	load : function (){
        	for (var i = 0; i < this.urlList.length; ++i)
        	this.loadBuffer(this.urlList[i], i);
        },

        getBufferList: function(){
            console.log(this.bufferList);
            return this.bufferList;
        },
        // Method LoadBuffer
        loadBuffer: function(url, index) {        
            var request = new XMLHttpRequest();  // Declare XMLHttpRequest Object
            request.open("GET", url, true);
            request.responseType = "arraybuffer";

            var self = this;
            request.onload = function() {
                self.context.decodeAudioData(
                    request.response,
                    function(buffer) {
                        if (!buffer) {
                            alert('error decoding file data: ' + url);
                            return;
                        }
                        self.bufferList[index] = buffer;
                        if (++self.loadCount == self.urlList.length){
                            self.Manager.bufferLoadCompleted();
                        }
                    }    
                )
            }
            /*request.onload = function(){
                callback(this.responseText); 
            }
             
            function callback(response){
                // JSON encoded server return
                var json = JSON.parse(response);
             
                if(json.status == 'success'){
                    // Update authorized variable to true
                    authorized = true;
                } else {
                    authorized = false;
                }
            }*/
            request.onerror = function() {
                alert('BufferLoader: XHR error');        
            }
            request.send();
    	}
    });
});
