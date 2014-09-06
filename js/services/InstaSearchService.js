angular.module('myApp')
    .factory('instaSearchService', function($http) {
        return {
            search : function(searchterm){

                var url = "https://api.instagram.com/v1/tags/" + searchterm + "/media/recent";
                
                var config = {
                    params : {
                        callback: 'JSON_CALLBACK',
                        client_id: 'fa7a369c36ab4ac3ae5b200f1c43139c'                        
                    }                    
                }

                return $http.jsonp(url, config)
                    .then(function(data){                            
                            return {
                                searchterm: searchterm,
                                data: data.data.data
                            };
                        },function(data, status){
                            console.log(data);
                            console.log(status);
                        });
            }
        }
	});