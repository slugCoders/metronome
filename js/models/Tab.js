//This class manage tab function actived by user
var Tab = (function () {
//Constructor
car constructor = function(){
	//private
	var beatPerSecond = 0;
	var nSecondsTabs = {0,0};
	var active = false;

	//Getters and Setters
	this.getBeatsPerSecond = function(){
		return beatPerSecond;
	};

	this.setBeatsPerSecond = function(bps){
		beatPerSecond = bps;
	};

	this.isActive = function(){
		return active;
	};

	this.setActive = function(){
		active = !active;
	}
};

//public methods
this.beatsAvarage = function(){
	for(i = 0, len = this.nSecondsTabs.lenght, sum ; i < len;i++){
		sum += this.nSecondsTabs[i];
	}
	return sum/len;
};

return Tab;
})();