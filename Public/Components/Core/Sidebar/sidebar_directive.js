'use strict';

app.directive('sidebar', function(){
    return{
        restrict : 'E',
        template : '<canvas id="sidebarCanvas" height="1080" width="240"></canvas>',
        link : function(scope, element){

            /*
             CANVAS
             */
            var stage = new createjs.Stage("sidebarCanvas");
            var color1 = 'rgba(126, 23, 16, 1)',
                color2 = 'rgba(229, 18, 18, 1)';
            var xStart, yStart, xStop, yStop, x0, y0, x1, y1, x2, y2, x3, y3;
            scope.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            var background = new createjs.Shape();
            var shape = new createjs.Shape();


            scope.$watch('screenWidth', function(newValue, oldValue){
                var width = stage.canvas.width;
                var height = stage.canvas.height;
                if(newValue > 600){
                    xStart=width/2; yStart= 0;
                    xStop=width/2; yStop= height;
                    x0= 0; y0=height/2 - 200;
                    x1= width; y1= height/2-300;
                    x2= width; y2= height/2+300;
                    x3= 0; y3= height/2 + 200;
                    drawSidebar();
                }else{
                    xStart=0; yStart= height/2;
                    xStop=width; yStop= height/2;
                    x0= width/2 - 200; y0=0;
                    x1= width/2-300; y1= height;
                    x2= width/2+300; y2= height;
                    x3= width/2 + 200; y3= 0;
                    drawSidebar();
                }
            });

            function drawSidebar(){
                background.graphics.beginLinearGradientFill([color1, color2], [1, 0], xStart, yStart, xStop, yStop).drawRect(0, 0, stage.canvas.width, stage.canvas.height);
                shape.graphics.beginLinearGradientFill([color1, color2], [0, 1], xStart, yStart, xStop, yStop).moveTo(x0,y0).lineTo(x1,y1).lineTo(x2,y2).lineTo(x3,y3);
                stage.addChild(background);
                stage.addChild(shape);
                stage.update();
            }


            /*
                ANIMATION
             */
            /*global TweenMax*/
            TweenMax.from('#sidebarCanvas', 1, {opacity:0});


        }
    }
});