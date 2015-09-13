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
                scale : 0.8
            }, 0.1);


            scope.hideButton = function(page){
                var tmLeave = new TimelineMax();
                tmLeave.staggerTo(element[0].children, 0.2, {scale : 0.8}, 0.1);
                tmLeave.staggerTo(element[0].children, 0.2, {top : -300},0.1);
                $state.go('presentation.'+page
                );
            };

        }
    }
});