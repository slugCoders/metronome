// Problema com estructurar el tema en format objectes.
// Com poder usar les variables definides a init, per la resta de funcions, this no funciona.

var Manager = Backbone.Model.extend({
	playing :false,
	beep1:"",
	beep2:"",

	initialize: function(){
		console.log("init manager");
		// Declare variables in global scope
/*		var context; 
		var bufferLoader;
		var beep1;
		var beep2;
		var 
*/
		


		// Define context for compatible browsers, and load 2 sounds using BufferLoader Class.
		try {
	        context = new AudioContext();
	    }
	    catch(e) {
	        alert("Web Audio API is not supported in this browser");
	    }
	 	// Start loading sounds (beep) and create an BufferLoader Object (buffer-loader_model.js)
	    bufferLoader = new BufferLoader(context,["http://localhost/www/backbone/metronom/data/beep1.wav","http://localhost/www/backbone/metronom/data/beep2.wav"],this.bufferLoadCompleted());
	    bufferLoader.load();

		var bufferList = bufferLoader.bufferList;
  		this.beep1 = bufferList[0];
    	this.beep2 = bufferList[1];
    	console.dir(bufferList);
    	
	},

	bufferLoadCompleted : function(){
		console.log("in bufferLoadCompleted");
	},

	// Aquesta funció crea la font sonora , reb per arguments el Buffer, i time. 
	// Primer crea una font del tipus BufferSource ,ja que carreguem un so des d'un directori.
	// Asigna el .buffer, al parametre buffer(so) que li passem com argument. ve de la funció de mes avall StartPlayingRithm.
	// .conecta la font sonora amb la destinació del context.
	// I amb .start sona el so, en funció d'un temps que li passem. 
	playSound: function(buffer,time){
		source = context.createBufferSource();
   		source.buffer = buffer;
    	source.connect(context.destination);
    	source.start(time);
    	console.info("beep");
	},


	// Plays Rhythm 1
	// Aquesta funció determina el ritme
	// Primer extreu de l'array bufferList el sons i els asigna una variable,l'argument bufferList ve del boto del index.html
	// Determina un temps StartTime
	// Un Tempo i una negra
	// En acavar dispara una sequencia de PlaySound (funció anterior que fa que soni el so)
	startPlayingRithm : function(){
		console.log("StartPlayingRithm");
		console.log(this.playing);
		console.log(this.beep1);
		if (this.playing) {
	        playing = false;
	        clearInterval(timer);
	        source.stop();          
	    }else{
	        this.playing = true;
	        var startTime = context.currentTime;
	        var tempo = 120; // BPM (beats per minute)
	        var quarterNoteTime = 60 / tempo; // Determina negres
	        var sCompas = quarterNoteTime *4 // Segons que dura un compas.
	            
	        this.playSound( startTime);
	        this.playSound(this.beep1, startTime + 1*quarterNoteTime);
	        this.playSound(this.beep1, startTime + 2*quarterNoteTime);
	        this.playSound(this.beep1, startTime + 3*quarterNoteTime);        
	       
	        timer =  setInterval(function(){         
	            startTime = startTime + sCompas;        

	        	this.playSound(beep2, startTime);
	            this.playSound(beep1, startTime + 1*quarterNoteTime);
	            this.playSound(beep1, startTime + 2*quarterNoteTime);
	            this.PlaySound(beep1, startTime + 3*quarterNoteTime);
	        },sCompas*1000);
    	};
	}
	
});


