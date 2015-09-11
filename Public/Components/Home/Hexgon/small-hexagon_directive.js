'use strict';

app.directive('smallHexagon', function(){
    return{
        restrict : 'E',
        template : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" enable-background="new 0 0 400 100" xml:space="preserve">',
        link : function(scope, element){
            /*global Snap*/
            /*global TweenMax*/
            var snap = new Snap(element[0].children[0]);
            var hex;

            snap.attr({'viewBox' :'0 0 100 100'});
            hex = snap.polygon('25,93.3 0,50 25,6.7 75,6.7 100,50 75,93.3');
            scope.smaller = function(){
                TweenMax.to(hex, 2, {
                    snap : {points : '25,93.3 0,50 25,6.7 75,6.7 100,50 75,93.3'}
                });

            };
            scope.taller = function(){
                TweenMax.to(snap, 2, {
                    snap : {viewBox :'0 0 400 100', width : 200}
                });
                //snap.attr({'viewBox' :'0 0 400 100', 'width' : 200});
                TweenMax.to(hex, 2, {
                    snap : {points : '30.9,93.3 1.1,50 30.6,6.7 369.3,6.7 398.9,50 369.5,93.3'}
                });
            };

/*
            if(element[0].className==='large'){
                snap.attr({'viewBox' :'0 0 400 100'});
                hex = snap.polygon('30.9,93.3 1.1,50 30.6,6.7 369.3,6.7 398.9,50 369.5,93.3');

                scope.smaller();
            }else{

            }
            */
            hex.attr({'fill' : element[0].getAttribute('color')});

        }
    }
});
