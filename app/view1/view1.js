'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['newsProvider', 'constantsProvider', function(newsProv, constProv) {
   var constants = constProv.getConstants(),
   vm = this;
   vm.news = [];
   
   newsProv.getNews().then(response => {
     console.log(constants.newsProvider.name, constants.newsProvider.messages.getNewsSucceed, response);
     vm.news = response.data;
    }, 
   response => {console.error(constants.newsProvider.name, constants.newsProvider.messages.getNewsFailed, response);});
}]);