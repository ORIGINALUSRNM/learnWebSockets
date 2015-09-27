(function(){
	angular.module('jsh')
		.controller('MainController', function(contentSocket){

			var vm = this;
				vm.data = {};

			contentSocket.on('stock.data', function (data) {
				vm.data.payload = JSON.parse(data).payload;
			});

		});
})();