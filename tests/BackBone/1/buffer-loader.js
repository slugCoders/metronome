// Audio Buffer Model (Classe AudioBUffer)
var BufferLoader = Backbone.model.extend({

    initialize : function (conext,urlList,callback){
        // Attributes
        this.context = context;
        this.urlList = urlList;
        this.onload = callback;
        this.bufferList = new Array();
        this.loadCount = 0;
    },
    // Method Load
    load : function (){
        for (var i = 0; i < this.urlList.length; ++i)
        this.loadBuffer(this.urlList[i], i);
    },
    // Method LoadBuffer
    loadBuffer: function(url, index) {        
        var request = new XMLHttpRequest();  // Declare XMLHttpRequest Object
        request.open("GET", url, true);
        request.responseType = "arraybuffer";

        var loader = this;
        request.onload = function() {
            loader.context.decodeAudioData(
                request.response,
                function(buffer) {
                    if (!buffer) {
                        alert('error decoding file data: ' + url);
                        return;
                    }
                    loader.bufferList[index] = buffer;
                    if (++loader.loadCount == loader.urlList.length)
                        loader.onload(loader.bufferList);
                }    
            )
        }
        request.onerror = function() {
            alert('BufferLoader: XHR error');        
        }
        request.send();
    }   
});