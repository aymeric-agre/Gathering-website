'use strict';

var app = angular.module('app',[]);

app.directive('mainPage', function(){
   return{
       restrict : 'E',
       templateUrl : './Components/Core/Main/main_template.html',
       link : function(scope, element){
            alert('bob');
       }
   }
});