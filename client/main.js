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

main = {
	controller: m.reactive(function (options) {
		// console.log('main');

		var ctrl = this;
		Meteor.subscribe("userStatus");
		Meteor.subscribe("notification");
		Meteor.subscribe("games");

		ctrl.Users = Meteor.users.find().fetch();

		ctrl.UserSendedNotification = Notification.find({
			fromUserId: Meteor.userId(),
			replied: false
		}).fetch();

		// console.log(ctrl.UserSendedNotification);

		ctrl.ReceivedNotification = Notification.find({
			toUserId: Meteor.userId(),
			replied: false
		}).fetch();

		ctrl.UserReceivedId = [];
		ctrl.ReceivedNotification.map(function (item) {
			ctrl.UserReceivedId.push(item.fromUserId);
		});

		var onRequestBattle = (ctrl.UserSendedNotification.length > 0) || (ctrl.ReceivedNotification.length > 0);
		Meteor.users.update({_id: Meteor.userId()}, {
			$set: {
				'profile.onRequestBattle': onRequestBattle
			}
		});

		ctrl.currentGame = Games.find({
			$or: [
				{
					userIdA: Meteor.userId()
				},
				{
					userIdB: Meteor.userId()
				}
			],
			leave: false
		}).fetch();

		// console.log(ctrl.currentGame);

		if (ctrl.currentGame.length > 0) {
			var gameId = ctrl.currentGame[0]['_id'];
			// m.route("/battle/" + gameId);
			window.location.href = '/#/battle/' + gameId;
		}

		//배틀 신청
		ctrl.requestBattle = function (_id, userName) {
			if (Meteor.userId()) {
				Notification.insert({
					fromUserId: Meteor.userId(),
					fromUserName: Meteor.user().profile.userName,
					toUserId: _id,
					toUserName: userName,
					replied: false
				});
			}
			else {
				alert('로그인하세요.');
			}
		};

		ctrl.accept = function (_id, fromUserId, fromUserName, toUserId, toUserName) {
			//게임 룸 생성
			var gameId = Games.insert({
				userIdA: fromUserId,
				userIdAName: fromUserName,
				userIdB: toUserId,
				userIdBName: toUserName,
				qa: {},
				leave: false
			});

			Notification.update(_id, {
				$set: {
					replied: true,
					accept: true,
					gameId: gameId
				}
			});
		};
		ctrl.deny = function (_id, fromUserId, fromUserName, toUserId, toUserName) {
			Notification.update(_id, {
				$set: {
					replied: true,
					accept: false,
				}
			});
		};
	}),
	view: function (ctrl) {
		return m('div', [
				m('ul.lit-group', [
		            ctrl.Users.map(function (user, index) {
					if (Meteor.userId() !== user._id) {

						return m('li.list-group-item', [

								user.profile.userName,
								m('div.btn-group.btn-group-xs.pull-right', {
									role: 'group',
									ariaLabel: 'button',
								}, (ctrl.UserSendedNotification.length > 0 && ctrl.UserSendedNotification[0].toUserId === user._id) ? [
										m('span.btn.btn-warning', {}, '배틀 신청중'),
										m('a.btn.btn-danger', {
											onclick: ctrl.deny.bind(this, ctrl.UserSendedNotification[0]._id)
										},
											m('span.glyphicon.glyphicon-remove', {}, '')
										)
									] :
								(ctrl.UserReceivedId.indexOf(user._id) > -1 || (ctrl.UserSendedNotification.length > 0 && ctrl.UserSendedNotification[0].toUserId)) ?
								'' :
								(user.profile.onRequestBattle) ?
								m('a.btn.btn-primary', {}, '배틀 신청중') :
								(user.profile.onBattle) ?
								m('a.btn.btn-primary', {}, '배틀중') :
								m('a.btn.btn-primary', {
									onclick: ctrl.requestBattle.bind(this, user._id, user.profile.userName)
								}, '배틀 신청')

								)
							]);
					}
				})
				]),
				m('div', [



					ctrl.ReceivedNotification.map(function (item, index) {

					return m('div', [

							// console.log(item),
							m('div.modal-backdrop.fade.in', ''),

							m('div.modal-dialog.modal-battle', [
								m("div.modal-content", [
									m('div.modal-header', [
										m('h4.modal-title', '배틀 신청'),
									]),



									m('div.modal-body', [
										m('p', item.fromUserName + '님이 배틀 신청하셨습니다.'),
									]),
									m('div.modal-footer', [

										m('button.btn.btn-success', {
										onclick: ctrl.accept.bind(this, item._id, item.fromUserId, item.fromUserName, item.toUserId, item.toUserName)
									}, '수락'),
										m('button.btn.btn-danger', {
										onclick: ctrl.deny.bind(this, item._id, item.fromUserId, item.fromUserName, item.toUserId, item.toUserName)
									}, '거절')


									]),


								])

							])

						]);
				})
				]),
		]);

	}
};
