function rrPractice2Controller() {

	// Images. These will automatically be loaded
	this.images = {};
	
	this.images.rabbitBody = "images/grouping_game/practice/rabbit_body.png";
	this.images.rabbitHead = "images/grouping_game/practice/rabbit_head.png";
	this.images.blackBoard = "images/grouping_game/practice/black_board.png";
	
	this.images.star1 = "images/widgets/star1.png";
	this.images.star2 = "images/widgets/star2.png";
	this.images.star3 = "images/widgets/star3.png";

	this.images.labelPaused = "images/widgets/label_paused.png";
	this.images.labelTryAgain = "images/widgets/label_try_again.png";
	this.images.labelPerfect = "images/widgets/label_perfect.png";
	this.images.labelGood = "images/widgets/label_good.png";
	this.images.labelExcellent = "images/widgets/label_excellent.png";

	this.images.buttonPause = "images/widgets/button_pause.png";
	this.images.buttonMenu = "images/widgets/button_menu.png";
	this.images.buttonRestart = "images/widgets/button_restart.png";
	this.images.buttonResume = "images/widgets/button_resume.png";
	this.images.buttonDone = "images/widgets/button_done.png";
	this.images.buttonRetry = "images/widgets/button_retry.png";
	this.images.buttonNext = "images/widgets/button_next.png";
	this.images.buttonNextBig = "images/grouping_game/practice/button_next_big.png";
	
	this.images.eggs = [
		"images/grouping_game/practice/egg1.png",
		"images/grouping_game/practice/egg2.png",
		"images/grouping_game/practice/egg3.png",
		"images/grouping_game/practice/egg4.png",
		"images/grouping_game/practice/egg5.png",
		"images/grouping_game/practice/egg6.png",
		"images/grouping_game/practice/egg7.png",
		"images/grouping_game/practice/egg8.png",
		"images/grouping_game/practice/egg9.png"
	];
	this.images.placeHolderEgg = "images/grouping_game/practice/egg0.png";
	
	// sounds
	this.sounds = {};
	this.sounds.acceptEgg = "sounds/grouping_game/accept_egg.mp3";
	this.sounds.declineEgg = "sounds/grouping_game/reject_egg.mp3";
	this.sounds.select = "sounds/menu/menu_select.mp3";
	this.sounds.next = "sounds/grouping_game/done.mp3";
	this.sounds.background = "sounds/background_music/game.mp3";
	//view.draw();
};

// Happens when images are loaded
Practice2Controller.prototype.initialize = function () {
	this.view = new PracticeView(this);
	app.view = this.view;
	
	//dimensions
	app.view.viewVars = {};
	app.view.viewVars.pauseButtonDimensions = {x:0.02, y:0.035, width:0.09, height:0.12};
	
	app.view.totalNumberOfSets = 4;
	app.view.numberOfQuestionsPerSet = 3;
	app.view.questionSets = {};
	
	this.keyboardTexts = [
		["Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
		["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
		["1", "2", "3", "4", "5", "6", "7", "8", "9"]
	];
	
	this.questionSets = [
		[
			{question: "Twenty-One is the same as _____ and ten?",    answer: 0, keyboardId: 1, blankX: 0.378, blankY:0.160},
			{question: "Twelve is the same as _____ and ten?",    answer: 1, keyboardId: 1, blankX: 0.378, blankY:0.160},
			{question: "Thirteen is the same as _____ and ten?",  answer: 2, keyboardId: 1, blankX: 0.378, blankY:0.160},
			{question: "Fourteen is the same as _____ and ten?",  answer: 3, keyboardId: 1, blankX: 0.378, blankY:0.160},
			{question: "Fifteen is the same as _____ and ten?",   answer: 4, keyboardId: 1, blankX: 0.378, blankY:0.160},
			{question: "Sixteen is the same as _____ and ten?",   answer: 5, keyboardId: 1, blankX: 0.378, blankY:0.160},
			{question: "Seventeen is the same as _____ and ten?", answer: 6, keyboardId: 1, blankX: 0.378, blankY:0.160},
			{question: "Eighteen is the same as _____ and ten?",  answer: 7, keyboardId: 1, blankX: 0.378, blankY:0.160},
			{question: "Nineteen is the same as _____ and ten?",  answer: 8, keyboardId: 1, blankX: 0.378, blankY:0.160}
		],
		[ 
			{question: "Ten and one is the same as _____?",   answer: 0, keyboardId: 0, blankX: 0.518, blankY:0.160},
			{question: "Ten and two is the same as _____?",   answer: 1, keyboardId: 0, blankX: 0.518, blankY:0.160},
			{question: "Three and ten is the same as _____?", answer: 2, keyboardId: 0, blankX: 0.588, blankY:0.160},
			{question: "Four and ten is the same as _____?",  answer: 3, keyboardId: 0, blankX: 0.518, blankY:0.160},
			{question: "Ten and five is the same as _____?",  answer: 4, keyboardId: 0, blankX: 0.518, blankY:0.160},
			{question: "Ten and six is the same as _____?",   answer: 5, keyboardId: 0, blankX: 0.518, blankY:0.160},
			{question: "Seven and ten is the same as _____?", answer: 6, keyboardId: 0, blankX: 0.588, blankY:0.160},
			{question: "Eight and ten is the same as _____?", answer: 7, keyboardId: 0, blankX: 0.588, blankY:0.160},
			{question: "Ten and nine is the same as _____?",  answer: 8, keyboardId: 0, blankX: 0.518, blankY:0.160}
		],
		[
			{question: "Ten and one is the same as _____?",   answer: 0, keyboardId: 2, blankX: 0.518, blankY:0.160},
			{question: "Ten and two is the same as _____?",   answer: 1, keyboardId: 2, blankX: 0.518, blankY:0.160},
			{question: "Three and ten is the same as _____?", answer: 2, keyboardId: 2, blankX: 0.588, blankY:0.160},
			{question: "Four and ten is the same as _____?",  answer: 3, keyboardId: 2, blankX: 0.518, blankY:0.160},
			{question: "Ten and five is the same as _____?",  answer: 4, keyboardId: 2, blankX: 0.518, blankY:0.160},
			{question: "Ten and six is the same as _____?",   answer: 5, keyboardId: 2, blankX: 0.518, blankY:0.160},
			{question: "Seven and ten is the same as _____?", answer: 6, keyboardId: 2, blankX: 0.588, blankY:0.160},
			{question: "Eight and ten is the same as _____?", answer: 7, keyboardId: 2, blankX: 0.588, blankY:0.160},
			{question: "Ten and nine is the same as _____?",  answer: 8, keyboardId: 2, blankX: 0.518, blankY:0.160},
		],
		[
			{question: "11 is the same as _____ and ten?", answer: 0, keyboardId: 1, blankX: 0.719, blankY:0.059},
			{question: "12 is the same as _____ and ten?", answer: 1, keyboardId: 1, blankX: 0.719, blankY:0.059},,
			{question: "13 is the same as _____ and ten?", answer: 2, keyboardId: 1, blankX: 0.719, blankY:0.059},,
			{question: "14 is the same as _____ and ten?", answer: 3, keyboardId: 1, blankX: 0.719, blankY:0.059},,
			{question: "15 is the same as _____ and ten?", answer: 4, keyboardId: 1, blankX: 0.719, blankY:0.059},,
			{question: "16 is the same as _____ and ten?", answer: 5, keyboardId: 1, blankX: 0.719, blankY:0.059},,
			{question: "17 is the same as _____ and ten?", answer: 6, keyboardId: 1, blankX: 0.719, blankY:0.059},,
			{question: "18 is the same as _____ and ten?", answer: 7, keyboardId: 1, blankX: 0.719, blankY:0.059},,
			{question: "19 is the same as _____ and ten?", answer: 8, keyboardId: 1, blankX: 0.719, blankY:0.059},,
		]
		
	]
	
	app.view.viewVars.keyboardTexts = this.keyboardTexts;
	app.view.viewVars.questionSets = this.questionSets;
	app.view.viewVars.currentQuestionSet = -1;
	
	// variables
	this.mistakesCount = 0;
	this.activitiesEnabled = true;
	this.keyboardEnabled = true;
	
	//score
	app.view.allowableErrorsCount = 6;
	app.view.errorsMade = 0;
	app.view.errorsRange = 2;
	
	this.view.setImages(this.images);
	this.view.setSounds(this.sounds);
	
	if(Storage.get("settingMusic") == true){
		Music.stopBackgroundMusic();
		Music.playBackgroundMusic(this.sounds.background);
	}
	
	this.view.drawBlackBoard();
	this.view.drawRabbit();
	this.view.drawQuestion();
	this.view.drawKeyboard();
	this.view.drawPauseWidgets();
	this.view.drawButtonNextBig();
	//this.view.questionCallback();
	
	app.stage.draw();
	
	this.pickQuestions();
	
	/*
	if (Env.debug) {
		this.gameQuestions = [
			{set:3, question:0},
			{set:3, question:1},
			{set:3, question:2},
			{set:3, question:3},
			{set:3, question:4},
			{set:3, question:5},
			{set:3, question:6},
			{set:3, question:7},
			{set:3, question:8}
		];
	}
	*/
	
	this.currentQuestion = -1;
	app.view.presentNextQuestion();
};

// destructor (is automatically called when you leave the page)
Practice2Controller.prototype.finalize = function() {
	
}

Practice2Controller.prototype.restart = function(sameNumber) {
	app.route("Practice2");
};

Practice2Controller.prototype.menu = function() {
	app.route("MenuUnit");
};

Practice2Controller.prototype.pickQuestions = function() {
	this.gameQuestions = [];
	
	for(var setNumber = 0; setNumber < this.questionSets.length; setNumber++) {
		// create an array of numbers
		var list = [];
		while(list.length < 3) {
			var questionNumber = MathUtil.random(0, this.questionSets[setNumber].length);
			if (list.indexOf(questionNumber) == -1) {
				list.push(questionNumber);
				this.gameQuestions.push({set: setNumber, question: questionNumber});
			}
		}
	}
};

Practice2Controller.prototype.getCurrentQuestion = function() {
	return this.questionSets[this.gameQuestions[this.currentQuestion].set][this.gameQuestions[this.currentQuestion].question];
};

Practice2Controller.prototype.mistakeMade = function() {
	this.mistakesCount++;
}

Practice2Controller.prototype.achievedStars = function (starsCount) {
	var unitRecordsModel = new UnitRecordsModel(app.currentUnit);
	if (unitRecordsModel.getStars(app.currentGame) < starsCount) {
		unitRecordsModel.setStars(app.currentGame, starsCount);
	}
};
