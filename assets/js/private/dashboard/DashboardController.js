angular.module('DashboardModule').controller('DashboardController', ['$scope', function($scope){
	//Initialize scope variables
	$scope.expandProfile = false;
	$scope.showVideo = false;
	//Initialize jsPlumb
	jsPlumb.reset();
	jsPlumb.setContainer();
	//Function to draw lines between DOM elements 
	$scope.drawLines = function(expandProfile){
		//If profile picture gets clicked (ngShow for div with id "Friends" is true), draw line between profile pic
		//and "Friends" div
		if(expandProfile){


					jsPlumb.bind("ready",function() {
					var firstInstance = jsPlumb.getInstance();
		    	firstInstance.importDefaults({
				  Connector : [ "Straight"],
				  Anchors : [ "Right", "Left" ],
				  PaintStyle: {strokeStyle:"white",},
				  Endpoint: ["Dot",{radius:1,}],


				});
				firstInstance.draggable("Friends");

				jsPlumb.reset();
				firstInstance.connect({
				  source:"Profile", 
				  target:"Friends", 

				});

				
			});

		}

		
		
	}
	




}]);
