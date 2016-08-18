
angular.module('myApp.view1').factory('newsProvider', ['$http', '$templateCache', 'constantsProvider', '$q', myNewsProvider]);
    
    function myNewsProvider($http, $templateCache, constantsProv, $q){
    
    var constants = constantsProv.getConstants(),
    self = {
        getNews : getNewsArray
    };
    
    function getNewsArray(){
        
      return $q(function(resolve, reject) {
            $http({method: constants.newsProvider.method, url: constants.newsProvider.url, cache: $templateCache}).
                 then(response => {resolve(response);}, response => {reject(response);});    
      });
        
    }
    
    return self;
}