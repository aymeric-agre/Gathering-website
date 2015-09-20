'use strict';

app.directive('headPresentation', function($state){
    return{
        restrict : 'E',
        templateUrl : './Components/Presentation/Head_presentation/head-presentation_template.html',
        link : function(scope, element){

            /*global TimelineMax*/
            /*global TweenMax*/
            /*global Back*/
            var tm = new TimelineMax();
            tm.staggerFrom(element[0].children, 0.3, {
                opacity: 0,
                scale : 0.8,
                left : '-=20px'
            }, 0.1);


        }
    }
});