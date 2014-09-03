var app = angular.module('tttApp', []);

app.controller('tttController', function($scope) { 

$scope.gameBoard =[
'','','',
'','','',
'','',''];
 
$scope.players = ['player1', 'player2'];

$scope.addName = function() {
      
        $scope.players[0] = $scope.player1;
        $scope.players[1] = $scope.player2;
};
	
// switch players turn if statement
$scope.currPlayer =1;

$scope.switchPlayer = function($index) 
{
	if ($scope.currPlayer == 1) 
	{
		if ($scope.gameBoard[$index] == '') 
		{ 
			$scope.gameBoard[$index] ='x';
			$scope.currPlayer ++;
		}
	}
	else if ($scope.currPlayer ==2)
	{
		if ($scope.gameBoard[$index] == '') 
		{ 
			$scope.gameBoard[$index] ='o';
			$scope.currPlayer--;	
		}	
	};

$scope.winCond = function() {
if (
	   $scope.gameBoard[0] == 'x' && $scope.gameBoard[1] == 'x' && $scope.gameBoard[2] == 'x' 
	|| $scope.gameBoard[0] == 'o' && $scope.gameBoard[1] == 'o' && $scope.gameBoard[2] == 'o' 
	|| $scope.gameBoard[3] == 'x' && $scope.gameBoard[4] == 'x' && $scope.gameBoard[5] == 'x' 
	|| $scope.gameBoard[3] == 'o' && $scope.gameBoard[4] == 'o' && $scope.gameBoard[5] == 'o' 
	|| $scope.gameBoard[6] == 'x' && $scope.gameBoard[7] == 'x' && $scope.gameBoard[8] == 'x' 
	|| $scope.gameBoard[6] == 'o' && $scope.gameBoard[7] == 'o' && $scope.gameBoard[8] == 'o' 
	
	|| $scope.gameBoard[0] == 'x' && $scope.gameBoard[3] == 'x' && $scope.gameBoard[6] == 'x' 
	|| $scope.gameBoard[0] == 'o' && $scope.gameBoard[3] == 'o' && $scope.gameBoard[6] == 'o' 
	|| $scope.gameBoard[1] == 'x' && $scope.gameBoard[4] == 'x' && $scope.gameBoard[7] == 'x' 
	|| $scope.gameBoard[1] == 'o' && $scope.gameBoard[4] == 'o' && $scope.gameBoard[7] == 'o' 
	|| $scope.gameBoard[2] == 'x' && $scope.gameBoard[5] == 'x' && $scope.gameBoard[8] == 'x' 
	|| $scope.gameBoard[2] == 'o' && $scope.gameBoard[5] == 'o' && $scope.gameBoard[8] == 'o' 

	|| $scope.gameBoard[0] == 'x' && $scope.gameBoard[4] == 'x' && $scope.gameBoard[8] == 'x'
	|| $scope.gameBoard[0] == 'o' && $scope.gameBoard[4] == 'o' && $scope.gameBoard[8] == 'o' 
	|| $scope.gameBoard[2] == 'x' && $scope.gameBoard[4] == 'x' && $scope.gameBoard[6] == 'x' 
	|| $scope.gameBoard[2] == 'o' && $scope.gameBoard[4] == 'o' && $scope.gameBoard[6] == 'o' 
	)

{ console.log("Nice Win Hot Shot!")} else {console.log("C'mon, You're Better Than That...")};
};
$scope.winCond();
};
});