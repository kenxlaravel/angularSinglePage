angular
	.module('kenAngular', ['ngMaterial', 'ui.router'])		// defining module and adding Angular buildin (Material , ui.router) modules
	.config(function($mdThemingProvider, $stateProvider){		// setting up the config theme

		$mdThemingProvider.theme('default')
			.primaryPaletter('red')
			.accentPalette('blue');

			$stateProvider
				.state('kenangularurl', {
					url: '/kenangularurl',
					templateUrl: 'components/kenangularurl/kenangularurl.tpl.html',
					controller: 'kenAngularCtrl as vm'
				});

	});
