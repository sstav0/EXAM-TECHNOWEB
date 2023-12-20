const Words = require('../Models/Words.js'); 

const W = new Words();

exports.home = async function(req, res){
	table = await W.loadMany();
	res.render('addWord.ejs', {words : table})
}

exports.delete = async function(req, res){
	let id_word = req.body.deleteWord;	

	await W.delete(id_word, 'id_word');
	res.redirect('/addWord');
}

exports.add = async function(req, res){
	let word = req.body.word;
	let translation = req.body.translation; 
	
	await W.save({'word' : word, 'translation' : translation, 'tries' : 0, 'successes' : 0});
	res.redirect('/addWord');
}