'use strict';

app.directive('fichePresentation', function($state){
    return{
        scope:{fiche : "=fiche"},
        restrict : 'E',
        link : function(scope, element){

            /*global TimelineMax*/
            /*global TweenMax*/
            /*global Back*/
            var tm = new TimelineMax();
            tm.from(element[0], 0.3, {
                opacity: 0,
                left : 300
            }, 0.1);

            scope.getUrl = function(){
                return './Components/Presentation/Pages/'+scope.fiche+'.html';
            }
        },
        template : '<div ng-include="getUrl()"></div>'
    }
});