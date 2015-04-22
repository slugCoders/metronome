define(function(require){
    var $ = require('jquery'),
    	_ = require('underscore'),
    	Backbone = require('backbone'),
    	BufferLoader = require('app/models/buffer-loader_model');

	
// Problema com estructurar el tema en format objectes.
// Com poder usar les variables definides a init, per la resta de funcions, this no funciona.
	var Manager = Backbone.Model.extend({

		initialize: function(){

			// Global variables
			playing =false;
			this.tempo = 120; // BPM (beats per minute)
			
			// Local Variables
			var beep1url = "audio/beep1.wav";
			var beep2url = "audio/beep2.wav";
			
		


			// Define context for compatible browsers, and load 2 sounds using BufferLoader Class.
			try {
		        this.context = new AudioContext();
		    }
		    catch(e) {
		        alert("Web Audio API is not supported in this browser");
		    }
		 	// Start loading sounds (beep) and create an BufferLoader Object (buffer-loader_model.js)
		 	// Pass this object to do the callback after.
		    this.bufferLoader = new BufferLoader(this.context,[beep1url,beep2url],this);
	    	
		},
		bufferLoadCompleted : function(){
			console.log("in bufferLoadCompletedvvvv");
	  		this.beep1 = this.bufferLoader.getBufferList()[0];
	    	this.beep2 = this.bufferLoader.getBufferList()[1];
		},

		// Aquesta funció crea la font sonora , reb per arguments el Buffer, i time. 
		// Primer crea una font del tipus BufferSource ,ja que carreguem un so des d'un directori.
		// Asigna el .buffer, al parametre buffer(so) que li passem com argument. ve de la funció de mes avall StartPlayingRithm.
		// .conecta la font sonora amb la destinació del context.
		// I amb .start sona el so, en funció d'un temps que li passem. 
		playSound: function(buffer,time){
			audioSource = this.context.createBufferSource();

	   		audioSource.buffer = buffer;
	    	audioSource.connect(this.context.destination);
	    	audioSource.start(time);
	    	console.info("beep");
		},


		// Plays Rhythm 1
		// Aquesta funció determina el ritme
		// Primer extreu de l'array bufferList el sons i els asigna una variable,l'argument bufferList ve del boto del index.html
		// Determina un temps StartTime
		// Un Tempo i una negra
		// En acabar dispara una sequencia de PlaySound (funció anterior que fa que soni el so)
		startPlayingRithm : function(){
			console.log("StartPlayingRithm");
			
			if (this.playing) {
		        this.playing = false;
		        clearInterval(timer);		           
		    }else{
		        this.playing = true;
		        var startTime = this.context.currentTime;		
		        var quarterNoteTime = 60 / this.tempo; // Determina negres
		        var sCompas = quarterNoteTime *4 // Segons que dura un compas
			        
			       
		        this.playSound(this.beep2, startTime);
			    this.playSound(this.beep1, startTime + 1*quarterNoteTime);
			    this.playSound(this.beep1, startTime + 2*quarterNoteTime);
			    this.playSound(this.beep1, startTime + 3*quarterNoteTime);     
			    

		       	self = this;
   		        timer =  setInterval(function(){         
		        	startTime = startTime + sCompas; 
		        	console.log(startTime)       

		        	self.playSound(self.beep2, startTime);
		            self.playSound(self.beep1, startTime + 1*quarterNoteTime);
		            self.playSound(self.beep1, startTime + 2*quarterNoteTime);
		            self.playSound(self.beep1, startTime + 3*quarterNoteTime);
		        },sCompas*1000);
	    	};
		},

		// Modify Tempo
		modTempo: function(i){
			this.playing = false;
			this.tempo = this.tempo+i;

			clearInterval(timer);
			this.startPlayingRithm();

			console.log(this.tempo);
		},
		
	});
	return new Manager();	
});