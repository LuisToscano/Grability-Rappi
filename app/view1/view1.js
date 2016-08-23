'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs : 'newsCtrl'
  });
}])
.controller('View1Ctrl', newsController);
newsController.$inject = ['newsProvider', 'constantsProvider'];
function newsController(newsProv, constProv) {
   var vm = this;
   vm.constants = constProv.getConstants(),
   vm.newsListEmpty = isEmptyNews,
   vm.toggleInfoVisible = toggleNews,
   vm.newsPressed = newsOnClick,
   vm.getLastNewsDate = getLastDate,
   vm.toggleShowNews = toggleShow,
   vm.showNews = false,
   vm.openNews = [],
   vm.news = [];
   
   loadNews();
   
   function getNewsSucceed(response){
     console.log(vm.constants.newsProvider.name, vm.constants.newsProvider.messages.getNewsSucceed, response);
     addDates(response.data);
     vm.news = response.data;
   }
   
   function getNewsFailed(response){
     console.error(vm.constants.newsProvider.name, vm.constants.newsProvider.messages.getNewsFailed, response);
   }
   
   function loadNews(){
     newsProv.getNews().then(getNewsSucceed, getNewsFailed);
   }
   
   function isEmptyNews(){
     return typeof vm.news == 'undefined' || vm.news.length === 0;
   }
   
   function toggleNews(news){
     newsProv.toggleNews(news);
   }
   
   function addDates(data){
     data.forEach(function(news){
       news.date = randomDate(vm.constants.newsProvider.dateGenerator.getStart(), vm.constants.newsProvider.dateGenerator.getEnd());
     });
   };
   
   function newsOnClick(news){
     vm.toggleInfoVisible(news);
     if(news.info_visible){
       vm.openNews.push(news);
     }else{
       var index = -1;
       for(var i=0; i<vm.openNews.length; i++){
         if(vm.openNews[i].id === news.id){
           index = i;
           break;
         }
       }
       
       if (index > -1) {
          vm.openNews.splice(index, 1);
       }
     }
   }
   
   function getLastDate(){
     if(vm.openNews.length === 0){return ''}
     else {return vm.openNews[vm.openNews.length-1].date;}
   }
   
   function toggleShow(){
     vm.showNews = !vm.showNews;
   }
   
   function randomDate(start, end) {
    var randate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    
      var monthNames = vm.constants.newsProvider.dateGenerator.months,
      day = randate.getDate(),
      monthIndex = randate.getMonth(),
      year = randate.getFullYear();

      return day + ' de ' + monthNames[monthIndex] + ' de ' + year;
   }
   
}
