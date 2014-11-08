//This class inherit from Manager an manage the audio of app
var AudioManager.prototype = new Manager();
AudioManager.prototype.construct= AudioManager;
function AudioManager(conf,actVol){
	this.Config = conf;
	var actualVolume = actVol;
};

AudioManager.prototype.start = function(){
	//TODO
};

AudioManager.prototype.stop = function(){
	//TODO
};

AudioManager.prototype.isVolumeConfigChange = function(){
	if(Config.getVolume() != actualVolume){
		return true;
	} else {
		return false;
	}
};

AudioManager.prototype.changeVolumeSystem = function(volume){
	//TODO
};