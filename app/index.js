var app = angular.module('resolveRoutes', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: 'app/views/home.html'
    }).when('/first-route', {
        controller: 'firstController',
        templateUrl: 'app/views/first_view.html',
        resolve: {
            data: function(firstControllerService) {
                return firstControllerService.loadData();
            }
        }
    }).when('/second-route', {
        controller: 'secondController',
        templateUrl: 'app/views/second_view.html',
        resolve: {
            data: function(secondControllerService) {
                return secondControllerService.loadData();
            }
        }
    }).otherwise({
        redirectTo: '/'
    });
}]);

app.run();