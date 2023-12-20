const Model = require('./Model.js');

class Words extends Model {
	constructor (){
		super("words");
	}
}

module.exports = Words;