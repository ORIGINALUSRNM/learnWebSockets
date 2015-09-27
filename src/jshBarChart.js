(function () {
	angular.module('jsh')
		.directive('jshBarChart', function () {
			return {
				restrict: 'EA',
				replace: true,
				template: '<div></div>'
			};
		});
})();