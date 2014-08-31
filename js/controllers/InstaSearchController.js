angular.module('myApp')
    .controller('InstaSearchCtrl', function($scope, instaSearchService) {
    	$scope.search = {};
        $scope.searching = false;
        

    	$scope.submitForm = function(){

    		if ($scope.searchForm.$valid){
                $scope.searching = true;

                instaSearchService.search($scope.search.term)
                .then(function(response){
                    $scope.searching = false;
                }
                ,function(response){
                    $scope.searching = false;
                });
            }

    		if ($scope.searchForm.$invalid)
    			alert('form not valid');
    	};
	});