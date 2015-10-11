m.reactive = function (controller) {
	return function (options) {
		var instance = {};

		var computation = Tracker.autorun(function () {
			m.startComputation();
			controller.call(instance, options);
			m.endComputation();
		});

		instance.onunload = function () {
			computation.stop();
		};

		return instance;
	};
};
// m.autoRedraw = function (target, reactiveFunction) {
//   var tracker = Tracker.autorun(function () {
//     reactiveFunction.bind(target)();
//     m.redraw();
//   });
//   target.onunload = function () {
//     tracker.stop()
//   };
// };

battle = {
	controller: m.reactive(function (options) {
		var ctrl = this;
		Meteor.subscribe("games");
		Meteor.subscribe("words");

		ctrl.keyPress = function () {};
		ctrl.leaveBattleRoom = function () {};

		var gameId = m.route.param('gameId');
		ctrl.currentGame = Games.find({
			_id: gameId
		}).fetch();

		if(ctrl.currentGame.length === 0) {
			return;
		}

		ctrl.score0 = 0;
		ctrl.score1 = 0;
		ctrl.RandomWordQ = '';

		for(var key in ctrl.currentGame[0].qa) {
			if(ctrl.RandomWordQ === '' && ctrl.currentGame[0].qa[key] && ctrl.currentGame[0].qa[key].winnerUserId === '') {
				ctrl.RandomWordQ = ctrl.currentGame[0].qa[key].question;
				ctrl.RandomWordA = ctrl.currentGame[0].qa[key].answer;

				var added = false;
				ctrl.RandomWordE = [];
				ctrl.currentGame[0].qa[key].example.map(function (item) {
					ctrl.RandomWordE.push(item.korean);

					if(added === false && Math.floor(Math.random() * 3) < 1) {
						ctrl.RandomWordE.push(ctrl.RandomWordA);
						added = true;
					}
				});

				if(!added) {
					ctrl.RandomWordE.push(ctrl.RandomWordA);
				}
			}
			if(ctrl.currentGame[0].qa[key].winnerUserId !== '') {
				if(ctrl.currentGame[0].qa[key].winnerUserId === Meteor.userId()) {
					ctrl.score0++;
				}
				else {
					ctrl.score1++;
				}
			}
		};

		// console.log(ctrl.score0, ctrl.score1);

		if(ctrl.score0+ctrl.score1 > 0 && ctrl.RandomWordQ === '') {
			if(ctrl.score0 > ctrl.score1) {
				noty({ text: '승리 ' + ctrl.score0 +':'+ ctrl.score1, layout: 'center', theme:'relax', killer: true,type: 'success',});
			}
			else {
				noty({ text: '패배 ' + ctrl.score0 +':'+ ctrl.score1, layout: 'center', theme:'relax', killer: true,type: 'danger',});
			}

			Games.update({
				_id: gameId
			}, {
				$set: {
					leave: true
				}
			});
		}

		if(ctrl.RandomWordQ === '') {
			var count = Words.find().count();
			var random_index = Math.floor(Math.random() * (count));
			var random_object = Words.find({}, { skip:random_index, limit:5 }).fetch();

			if(random_object.length < 5) {
				var random_index = Math.floor(Math.random() * (count));
				var random_object2 = Words.find({}, { skip:random_index, limit:5-random_object.length }).fetch();
				for(var idx in random_object2) {
					random_object.push(random_object2[idx]);
				}
			}

			var qa = {};
			random_object.map(function(wordsItem) {
				var random_index = Math.floor(Math.random() * (count/10));
				var random_object2 = Words.find({}, { skip:random_index, limit:4 }).fetch();

				qa[wordsItem.english] = {
					question: wordsItem.english,
					answer: wordsItem.korean,
					example: random_object2,
					winnerUserId: '',
					duration: ''
				};
			});

			Games.update({
				_id: gameId
			}, {
				$set: {
					qa: qa
				}
			});
		}

		ctrl.currentGame = ctrl.currentGame[0];

		if (ctrl.currentGame) {
			if (ctrl.currentGame.leave) {

				Meteor.users.update(Meteor.userId(), {
					$set: {
						'profile.onBattle': false,
						'profile.onRequestBattle': false,
					}
				});

				// alert('배틀이 종료되었습니다.');
				// console.log('배틀종료');

				// $('#myModal').modal('show');


				history.back();
				return;
			}

			ctrl.userName = Meteor.user().profile.userName;
			ctrl.userNameB = (ctrl.currentGame.userIdA === Meteor.userId()) ? ctrl.currentGame.userIdBName : ctrl.currentGame.userIdAName;

			Meteor.users.update(Meteor.userId(), {
				$set: {
					'profile.onBattle': true,
					'profile.onRequestBattle': false,
				}
			});
		}

		ctrl.keyPress = function (event) {
			// if (event.keyCode === 13) {
				// var isCorrect = false;
				// for(var key in ctrl.RandomWordA) {
				// 	if (event.target.value.trim() === ctrl.RandomWordA[key]) {
				// 		isCorrect = true;
				// 		break;
				// 	}
				// }

				var isCorrect = ctrl.RandomWordA === event.target.value.trim();

				if (isCorrect) {
					//correct!
					var $set = {};
					$set['qa.'+ctrl.RandomWordQ] = {
						question: ctrl.RandomWordQ,
						answer: ctrl.RandomWordA,
						winnerUserId: Meteor.userId()
					};

					Games.update({
						_id: gameId
					}, {
						$set: $set
					});

					// event.target.value = '';
					event.target.checked = false;
				}
				else {
					//wrong!!
					// console.log(event.target.value);
					alert('wrong answer');
				}
			// }
		};

		ctrl.leaveBattleRoom = function () {
			Games.update({
				_id: gameId
			}, {
				$set: {
					leave: true
				}
			});
		};
	}),
	view: function (ctrl) {
		return m('div', [


			m('a.btn.btn-danger.pull-right', {
				onclick: ctrl.leaveBattleRoom.bind(this)
			}, '게임 포기'),
			// m('hr.clear',''),

			m('h3', [
				m('strong', ctrl.userName),
				m('i', ' vs '),
				m('strong', ctrl.userNameB),
				m('hr','')
			]),

			m('h2.text-center', [
				m('span', ctrl.score0),
				m('span', ' : '),
				m('span', ctrl.score1),
				m('hr','')
			]),


            m('h1.text-center', [
				ctrl.RandomWordQ
			]),

			(ctrl.RandomWordE) ?
				m('div', [
					ctrl.RandomWordE.map(function (word, index) {
						return m('div.radio', [
							m('label#radio'+index, [
								m('input[type="radio"]', {
									name: 'answer', value: word, for: 'radio'+index,
									onclick: ctrl.keyPress.bind(this)
								}),
								word.replace(/\|/g, ', ')
							])
						]);
					})
				])
			: '',

			// m('input.form-control[placeholder=입력]', {
			// 	onkeypress: ctrl.keyPress.bind(this)
			// }),

		]);

	}
};
