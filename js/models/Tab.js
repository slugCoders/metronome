
//This class manage tab function actived by user
//Define if it's is necessary save beats per second and nSecondsTabs
// If the change it on time we don't need saved it.

var Tab = Backbone.Model.extend({
	defaults: {
		beatPerSecond: 2,
		nSecondsTabs:[2.5,2],
		actve:false
	},
	beatsAvarage: function(){
		len = this.nSecondsTabs.lenght;
		sum = 0;
		for(i = 0, len, sum; i < len;i++){
			sum += this.nSecondsTabs[i];
	 	}
	 	this.beatPerSecond=sum/len;
	}
})