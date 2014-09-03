var app = angular.module('tttApp', ["firebase"]);

app.controller('tttController', ['$scope', '$firebase', function ($scope, $firebase){
 $scope.cells = ["","","","","","","","",""];
 $scope.box = {cells:["X","X","O","O","","","","",""]};

	// var ref = $firebase( new Firebase("https://white-limo.firebaseio.com/") );
	// ref.$bind($scope,"box");

	// $scope.$watch('box', function(){
	// console.log('Hello!');
	// });

// Setup Player Names
var player = 1;
var winningConditions

// Symbol switches
$scope.switchPlayers = function($index){

	if ($scope.cells[$index] === ""){

		if (player === 1) {
			player++;
			$scope.cells[$index] = 'X';
		} else {
			player--;
			$scope.cells[$index] = 'O';
		}
	}
}
}]);