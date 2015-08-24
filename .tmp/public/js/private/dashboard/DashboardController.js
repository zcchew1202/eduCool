angular.module('DashboardModule').controller('DashboardController', ['$scope', function($scope){
	$scope.expandProfile = false;
	$scope.showVideo = false;
	jsPlumb.reset();
	jsPlumb.setContainer();
	$scope.drawLines = function(expandProfile){
		
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
