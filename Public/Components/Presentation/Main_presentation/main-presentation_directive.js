'use strict';

app.directive('mainPresentation', function($state){
    return{
        restrict : 'E',
        templateUrl : './Components/Presentation/Main_presentation/main-presentation_template.html',
        link : function(scope, element){

            /*global TimelineMax*/
            /*global TweenMax*/
            /*global Back*/

            scope.changePage = function(page){
                if($state.current.name !== page){
                    var fiche = document.getElementsByTagName('fiche-presentation');
                    var tl = new TimelineMax();
                    tl.to(fiche, 0.3, {
                        opacity : 0,
                        left: -300
                    });
                    tl.call(function() {
                        $state.go(page);
                    });
                }
            };

        }
    }
});