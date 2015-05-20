'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$modal', function($scope, $modal) {

	$scope.postsList = [
	{
		post: {
			id: 1,
			user: {
				id: 1,
				name: 'Alfred Allon',
				title: 'VP Marketing, ACME Inc',
				LinkedInURL: 'linkedin.com/in/thisguy',
				rank: '1',
				points: '123,456',
				groups: [
					'growth',
					'marketing',
					'Tel Aviv',
					'finance'
				]
			},
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere ligula in felis condimentum, sed laoreet augue rhoncus. Nam ullamcorper tortor ut sem iaculis tristique. Nullam tincidunt risus quam, quis aliquet turpis lobortis blandit. Morbi consequat mattis ex eget volutpat. Aenean nunc libero, scelerisque vitae massa vel, maximus ultrices mi. Sed consectetur felis nisi, ut mattis enim volutpat eget. Sed non porta eros. Proin diam sapien, tincidunt vitae fringilla vel, mattis eget leo. Duis gravida odio efficitur turpis porta volutpat. Curabitur sem lacus, ornare at nulla ac, placerat aliquam quam. Aenean risus erat, lobortis non feugiat eget, tincidunt et mauris. Quisque non est auctor, varius urna non, pharetra enim. Aliquam tincidunt a lacus at pellentesque?',
			group: 'growth',
			aCount: '14'
		}
	},
	{ post: {
		id: 2,
		user: {
			id: 2,
			name: 'Bob Barkley',
			title: 'CEO, TopDoggyDog LLC',
			LinkedInURL: 'linkedin.com/in/thisguy',
			rank: '10',
			points: '9,876',
			groups: [
				'growth',
				'culture',
				'Tel Aviv',
				'HR'
			]
		},
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere ligula in felis condimentum, sed laoreet augue rhoncus. Nam ullamcorper tortor ut sem iaculis tristique. Nullam tincidunt risus quam, quis aliquet turpis lobortis blandit. Morbi consequat mattis ex eget volutpat. Aenean nunc libero, scelerisque vitae massa vel, maximus ultrices mi. Sed consectetur felis nisi, ut mattis enim volutpat eget. Sed non porta eros. Proin diam sapien, tincidunt vitae fringilla vel, mattis eget leo. Duis gravida odio efficitur turpis porta volutpat. Curabitur sem lacus, ornare at nulla ac, placerat aliquam quam. Aenean risus erat, lobortis non feugiat eget, tincidunt et mauris. Quisque non est auctor, varius urna non, pharetra enim. Aliquam tincidunt a lacus at pellentesque?',
		group: 'Tel Aviv',
		aCount: '23'
		}
	},
	];
}]);