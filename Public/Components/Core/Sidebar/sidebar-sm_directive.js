'use strict';

app.directive('sidebarSm', function(){
    return{
        restrict : 'E',
        template : '<canvas id="sidebarCanvasSm" height="120" width="1920"></canvas>',
        link : function(scope, element){

            /*
             CANVAS
             */
            var stage = new createjs.Stage("sidebarCanvasSm");
            var color1 = 'rgba(126, 23, 16, 1)',
                color2 = 'rgba(229, 18, 18, 1)';
            var width = 1920,
                height = 120;
            scope.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            var background = new createjs.Shape();
            var shape = new createjs.Shape();

            background.graphics.beginLinearGradientFill([color1, color2], [1, 0], 0, height/2, width, height/2).drawRect(0, 0, width, height);
            shape.graphics.beginLinearGradientFill([color1, color2], [0, 1], 0, height/2, width, height/2).moveTo(width/2-400,0).lineTo(width/2+400,0).lineTo(width/2+300,height).lineTo(width/2-300,height);
            stage.addChild(background);
            stage.addChild(shape);
            stage.update();

            /*
             ANIMATION
             */
            /*global TweenMax*/
            /*global TimelineMax*/

            //setup a "tick" event listener so that the EaselJS stage gets updated on every frame/tick
            TweenMax.ticker.addEventListener("tick", stage.update, stage);
            var tm = new TimelineMax();
            tm.from(background, 0.5, {
                opacity : 0,
                easel : {y:-height-100}
            })
                .from(shape, 0.5, {
                    easel: {y: -height}
                })


        }
    }
});