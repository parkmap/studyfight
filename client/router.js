Meteor.startup(function () {
	m.route.mode = "hash";
	m.route(document.getElementById('container'), "/", {
        "/": main,
		"/battle/:gameId": battle,
    });
});