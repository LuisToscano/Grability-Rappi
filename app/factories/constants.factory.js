
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
                },
                'dateGenerator' : {
                    'months' :  ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio', 'Julio','Agosto', 'Septiembre', 'Octubre','Noviembre', 'Diciembre'],
                    'getStart'  : function(){ return new Date(2016, 0, 1)},
                    'getEnd'    : function(){ return new Date()}
                }
            },
            'views' : {
                'index' : {
                    'noNews' : 'No hay noticias para mostrar.',
                    'letsStart' : 'Oprime el menu para comenzar.'
                }
            }
        }
    }
    return self;
}