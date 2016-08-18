
angular.module('myApp.view1').factory('constantsProvider', [myNewsProvider]);
    
    function myNewsProvider(){
        
    var self = {
        getConstants: getConstantsArray
    };
    
    function getConstantsArray(){
        return {
            'newsProvider' :{
                'name'          : 'News Provider',
                'method'        : 'GET',
                'url'           : 'data/news_mock.json',
                'messages' : {
                     'getNewsFailed'  : 'Request Failed',
                     'getNewsSucceed' : 'Request Succeeded'
                }
            }
        }
    }
    return self;
}