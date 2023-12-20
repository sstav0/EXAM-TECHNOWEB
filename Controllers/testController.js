const Words = require('../Models/Words.js'); 

const W = new Words();

exports.home = async function(req, res){
	req.precedentIndex = 1;
	req.precedentTranslation = '';
	req.precedentWord = '';

	random(req, res)
}

exports.submit = async function(req, res){
	let answer = req.body.answer.toString();
	let correctAnswer = await W.searchValue('translation', 'id_word', req.session.precedentIndex);

	let tries = parseInt(await W.searchValue('tries', 'id_word', req.session.precedentIndex), 10);
	let successes = parseInt(await W.searchValue('successes', 'id_word', req.session.precedentIndex),10);

	if(answer.toLowerCase() === correctAnswer.toString().toLowerCase()){
		answerResp = 'correct';
		await W.update({'tries' : tries+=1, 'successes' : successes+=1}, 'id_word', req.session.precedentIndex)
	}
	else {
		answerResp = 'wrong';
		await W.update({'tries' : tries+=1}, 'id_word', req.session.precedentIndex)
	}

	random(req, res, answer=answerResp, precedentWord=req.session.precedentWord, req.session.precedentTranslation);
	
}


async function random(req, res, answer='', precedentWord='', precedentTranslation=''){
	let ids = await W.loadSpecific('id_word');

	let index = ids[Math.floor(Math.random() * ids.length)]['id_word'];
	
	let randomWord = await W.searchValue('word', 'id_word', index);
	let randomTranslation = await W.searchValue('translation', 'id_word', index);

	req.session.precedentWord = randomWord;
	req.session.precedentTranslation = randomTranslation;
	req.session.precedentIndex = index;

	res.render('home.ejs', {randomWord : randomWord, randomTranslation : randomTranslation, precedentWord : precedentWord, answer : answer, precedentTranslation : precedentTranslation});
}

