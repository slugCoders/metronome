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
			this.playing =false;
			this.tempo = 120; // BPM (beats per minute)
			
			//Nota actual dins de les 4 notes del compas
			//El valor canviara si es canvia el compas de moment nomes seran 4 notes. valor entre 0 i 3.
			this.currentNote = 0; 

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
		playMetronome: function(){
			if(!this.playing){
				this.quarterNoteTime = 60.0 / this.tempo;
				this.sCompas = this.quarterNoteTime *4 
				var interval = (this.getSCompas()/4) * 1000;
				var self = this
				console.log(interval);
				this.timerID = setInterval(function(){self.playSound(self.currentNote)},interval);
				this.playing = !this.playing;
			}
		},
		stopMetronome : function(){
			if (this.playing) {
			this.playing = !this.playing;
			clearInterval(this.timerID);
			};
		},
		playSound: function(currentNote){
			this.playing = true;
			var startTime = this.context.currentTime;

			audioSource = this.context.createBufferSource();
			audioSource.connect(this.context.destination);

			if (currentNote == 0 ){              // quarter notes = medium pitch
				console.log("NOTA 0");
				audioSource.buffer = this.beep2;
			}else{                               // other 16th notes = high pitch
				audioSource.buffer = this.beep1;
			}
			audioSource.start();
			 this.noteFlag();	
		},
		noteFlag:function() {
			this.currentNote++; 
			if (this.currentNote == 4) {
				this.currentNote = 0;
			}
		},
		modTempo: function(i){
			/*this.stopMetronome();*/
			this.tempo = this.tempo+i;			
			clearInterval(this.timerID);
			this.playing = !this.playing;
			this.playMetronome();
			document.getElementById("tempo").innerHTML = this.tempo;
		},
		getSCompas: function(){
			return this.sCompas;
		},		
	});
	return new Manager();	
});