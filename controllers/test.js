var tester = angular.module("tester", [])

tester.controller("AppCtrl", function ($http) {
	var app = this;

	$http.get("http://localhost:3000/qzs").success(function (result) {
		app.qzs = result;
	})
})