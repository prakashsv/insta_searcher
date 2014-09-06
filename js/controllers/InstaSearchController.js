angular.module('myApp')
    .controller('InstaSearchCtrl', function($scope, instaSearchService) {
    	$scope.search = {};
        $scope.searching = false;
        $scope.errorMsg = null;
        

    	$scope.submitForm = function(){

            $scope.response = {};

    		if ($scope.searchForm.$valid){
                $scope.searching = true;
                $scope.search.tag = angular.copy($scope.search.term);
                $scope.search.term = null;

                instaSearchService.search($scope.search.tag)
                    .then(function(response){
                        console.log(response);
                        $scope.searching = false;
                        $scope.response.searchterm = response.searchterm;
                        $scope.response.data = response.data;
                    });                    
            }

    		if ($scope.searchForm.$invalid)
    			$scope.errorMsg = "search term is missing";
    	};
	});