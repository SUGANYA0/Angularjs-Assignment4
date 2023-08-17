angular.module("name",['ngRoute'])

angular.module("name").config(["$routeProvider",function($routeProvider){
    $routeProvider
        .when('/listofcategories', {
            controller : 'listOfCategorie',
            templateUrl : 'listOfCategories/list-of-categories.html'
        })
        .when('/breakfast', {
            controller : 'breakfast',
            templateUrl : 'breakfast/breakfast.html'
        })
        .when('/lunch', {
            controller : 'lunch',
            templateUrl : 'lunch/lunch.html'
        })
        .when('/dinner', {
            controller : 'dinner',
            templateUrl : 'dinner/dinner.html'
        })
        .otherwise('/');
}])