var modules= ['ngRoute','ui.router', 'ngMaterial'];
var app = angular.module('app',modules);


app.config(function ($stateProvider, $urlRouterProvider){

        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // Home state routing
        $stateProvider.
            state('home', {
                url: '/',
                templateUrl: './Components/Home/home.html'
            });

});

