
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http)
{
 	$http.get("https://jsonplaceholder.typicode.com/posts").then(function (response) 
 	{
     $scope.myTable = response.data;
     pushingData(0,9);
  	});
 

	$scope.myFun= function(x)
 	{
 		$scope.showMe = true;
 		$scope.hideMe= true;
 		$scope.y = x;
 	
	}   

	$scope.goBack= function()
	{
			$scope.showMe = false;
			$scope.hideMe= false;
	}
		var i=0;
		var j=9;
		$scope.arr=[]

		$scope.next = function()
		{
			$scope.arr.length = 0;
	
			if(j!= $scope.myTable.length-1)
			{
				i=i+10;
				j=j+10;
			}

			if(j> $scope.myTable.length)
			{
				i=$scope.myTable.length - $scope.myTable.length%10;
				j= $scope.myTable.length-1;
			}	
		
			if(j < $scope.myTable.length)
			{ 
				pushingData(i,j);
				console.log($scope.arr);
			}

		}

		$scope.previous = function()
		{
			$scope.arr.length = 0;
			if(j==$scope.myTable.length-1 && ($scope.myTable.length)%10 !=0 )
			{
				i= i-10;
				j= ($scope.myTable.length-1) - ($scope.myTable.length)%10;
			} 
			if(i>0)
			{
				i=i-10;
				j=j-10;
			}
			if(i>=0)
			{ 
				pushingData(i,j);
				console.log($scope.arr);

			}

		}
		function pushingData(l,m)
		{
			for(var k=l; k<=m; k++)
			{
				console.log($scope.myTable[k]);
				$scope.arr.push($scope.myTable[k]);
			}
		}
});

