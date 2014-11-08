import Tab;
//TODO import Sound Class

//This class save all config info of the app
var MetronomeCOnfig = (function(){
	//Constructor
	var constructor = function(tmp,not,vol,dim,bt,snd,tb){
		var tempo = tmp;
		//Array of notes
		var notes = not;
		var volume = vol;
		//Array with width and heigh
		var dimension = dim;
		//Object of the library
		var sounds = snd;
		//Object tab
		var tab = tb;

		//Getters and Setters
		this.getTempo = function(){
			return tempo;
		};

		this.getNotes = function(){
			return notes;
		};

		this.getVolume = function(){
			return volume;
		};

		this.getDimension = function(){
			return dimension;
		};

		this.getSounds = function(){
			return sounds;
		};

		this.getTab = function(){
			return tab;
		};

		this.setTempo = function(temp){
			tempo = temp;
		};

		this.setNotes = function(nts){
			notes = nts;
		};

		this.setVolume = function(vlm){
			volume = vlm;
		};

		this.setDimension = function(dims){
			dimension = dims;
		};

		this.setSounds = function(snds){
			sounds = snds;
		};

		this.setTab = function(tbs){
			tab = tbs;
		};
	};

})