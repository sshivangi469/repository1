
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http)
{
 	$http.get("https://jsonplaceholder.typicode.com/posts").then(function (response) 
 	{
     $scope.postTable = response.data;
     pushingData(0,9);
  	});
 
/*To show the particular post on click */
	$scope.myFun= function(post)
 	{
 		$scope.showData = true;
 		$scope.hideData= true;
 		$scope.posts = post;
 	
	}   

/*To go back to the post table*/
	$scope.goBack= function()
	{
		$scope.showData = false;
		$scope.hideData= false;
	}

		var i=0;
		var j=9;
		$scope.arr=[]

/*To show the next 10 posts in table*/
		$scope.next = function()
		{
			$scope.arr.length = 0;
	
			if(j!= $scope.postTable.length-1)
			{
				i=i+10;
				j=j+10;
			}

			if(j> $scope.postTable.length)
			{
				i=$scope.postTable.length - $scope.postTable.length%10;
				j= $scope.postTable.length-1;
			}	
		
			if(j < $scope.postTable.length)
			{ 
				pushingData(i,j);
				console.log($scope.arr);
			}

		}

/*To show the previous 10 posts in the table*/
		$scope.previous = function()
		{
			$scope.arr.length = 0;
			if(j==$scope.postTable.length-1 && ($scope.postTable.length)%10 !=0 )
			{
				i= i-10;
				j= ($scope.postTable.length-1) - ($scope.postTable.length)%10;
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

/*To add the 10 posts data in the array*/
		function pushingData(l,m)
		{
			for(var k=l; k<=m; k++)
			{
				console.log($scope.postTable[k]);
				$scope.arr.push($scope.postTable[k]);
			}
		}
});

