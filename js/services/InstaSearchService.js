angular.module('myApp')
    .factory('instaSearchService', function($http, $timeout, $q) {
        return {
            search : function(searchterm){
                var defer = $q.defer();

                return $timeout(function() {
                    defer.resolve();
                }, 5000);


                return defer.promise;
            }
        }
	});