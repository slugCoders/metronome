
//This class manage tab function actived by user
var Tab = Backbone.Model.extend({
	beatPerSecond:100,
	nSecondsTabs:[2.5,2]
	actve:false,
	beatsAvarage: function(){
		len = this.nSecondsTabs.lenght;
		sum = 0;
		for(i = 0, len, sum; i < len;i++){
			sum += this.nSecondsTabs[i];
	 	}
	 	return sum/len;
	}
})