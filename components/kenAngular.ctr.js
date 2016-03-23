// Controller

(function() {
	"use strict"
angular
	.module("kenAngular") // using the module from app.js
	.controller("kenAngularCtrl", function($scope, $http, kenAngularFactory, $mdSidenav, $mdToast, $mdDialog) { // define controller name and appending services to use

		var vm = this;
		vm.openSidebar = openSidebar;
		vm.colseSidebar = colseSidebar;
		vm.saveInputdata = saveInputdata;
		vm.saveEditdata = saveEditdata;
		vm.saveEdit = saveEdit;
		vm.deleteC = deleteC;

		vm.infos;
		vm.editing;
		vm.indata;

		kenAngularFactory.getKenAngular().then(function(rdata) {		// getting remote data from factory service
	
			vm.infos = rdata.data;	// set infos data equal to remote data
			
		}); // access data from local json file by http get method

		var contact = {
			name: "ken Xu",
			email: "kenxinnovation@gmail.com",
			address: "110 EdgeWater, NJ"
		}	// manually create contact object. ideally it should come from user profile
	
			function openSidebar() {
				$mdSidenav('left').open();
			}	// using Toast add-on to show sidenave


			function colseSidebar() {
				$mdSidenav('left').close();
			}	// using Toast add-on to hide sidenave

			function saveInputdata(inputData) {
				if(inputData) {	// checking making sure inputData from form is not empty
					inputData.contact = contact; // append contact object to inputdata
					vm.infos.push(inputData); // save the inputdata to data.json
					vm.inputData = {};
					closeSidebar();
					showToast("New item added");
				}
			}	// defining the saveInputdata function and  trigger from view ng-click

			function saveEditdata(inputData) {
					vm.editing = true;
					openSidebar();
					vm.indata = inputData;

			}

			function saveEdit() {
				vm.editing = false;
				vm.indata = {};
				closeSidebar();
				showToast('Edit data saved');
			}

			function deleteC(even, info) {
				var confirm = $mdDialog.confirm()
					.title('Are you sure to delete ' + info.title + '?')
					.ok('Yes')
					.cancel('No')
					.targetEvent(event);

				$mdDialog.show(confirm).then(function(){
					var index = vm.infos.indexOf(info);
					vm.infos.splice(index, 1);

				}, function(){

				});
			}

			function showToast(msg) {
				$mdToast.show(
						$mdToast.simple()
						.content(msg)
						.position('top', 'left')
						.hideDelay(5000)
					);

			}
	});

})();