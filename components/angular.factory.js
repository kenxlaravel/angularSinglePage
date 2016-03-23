// Define factory service

(function(){

"use strict";

angular
	.module("kenAngular")
	.factory("kenAngularFactory", function($http){

		function getKenAngular(){
			return $http.get('data/data.json');	// using http GET method to get data from json file
		}

		return{

			getKenAngular : getKenAngular
		}

	});

})();