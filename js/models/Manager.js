// Manager is an Abstract class. Is a superclass that is used by Pendulum.js, LightsManager.js and AudioManger.js
var Manager = (function(){
	//Constructor
	var constructor = function(config){
		//Is an MetronomeConfig Object
		var Config = config;

		//Getters and Setters
		this.getConfig = function(){
			return Config;
		};

		this.setConfig = function(config){
			Config = config;
		};
	};

	Manager.prototype.start = function(){
		return;
	};

	Manager.prototype.stop = function(){
		return;
	}

}); 