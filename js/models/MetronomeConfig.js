//TODO import Sound Class
//This class save all config info of the app
var MetronomeConfig = Backbone.model.extend({
	defaults:{
		tempo:100,
		notes:["D","E","A"],
		volume:10,
		dimension:[200,200],
		beatPerSecond: 2,
		Sounds:'Sound object lybrary?',
		//Tab: Its necessary or is Tab that need contain config?

	}

})
// var MetronomeConfig = (function(){
// 	//Constructor
// 	var constructor = function(tmp,not,vol,dim,bt,snd,tb){
// 		var tempo = tmp;
// 		//Array of notes
// 		var notes = not;
// 		var volume = vol;
// 		//Array with width and heigh
// 		var dimension = dim;
// 		var beat = bt;
// 		//Object of the library
// 		var Sounds = snd;
// 		//Object tab
// 		var Tab = tb;

// 		//Getters and Setters
// 		this.getTempo = function(){
// 			return tempo;
// 		};

// 		this.getNotes = function(){
// 			return notes;
// 		};

// 		this.getVolume = function(){
// 			return volume;
// 		};

// 		this.getDimension = function(){
// 			return dimension;
// 		};

// 		this.getBeat = function(){
// 			return beat;
// 		};

// 		this.getSounds = function(){
// 			return sounds;
// 		};

// 		this.getTab = function(){
// 			return tab;
// 		};

// 		this.setTempo = function(tmp){
// 			tempo = tmp;
// 		};

// 		this.setNotes = function(not){
// 			notes = not;
// 		};

// 		this.setVolume = function(vol){
// 			volume = vol;
// 		};

// 		this.setDimension = function(dim){
// 			dimension = dim;
// 		};

// 		this.setBeat = function(bt){
// 			beat = bt;
// 		};

// 		this.setSounds = function(snd){
// 			sounds = snd;
// 		};

// 		this.setTab = function(tb){
// 			tab = tb;
// 		};
// 	};

// })