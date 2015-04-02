var app = angular.module("app", ["ngRoute"]);
angular.module("app").config(function($routeProvider){
    $routeProvider
        .when("/people", {
            controller: "peopleCtrl",
            templateUrl: "/templates/people.html"
        })
        .when("/things", {
            controller: "thingsCtrl",
            templateUrl: "/templates/things.html"
        })
        .otherwise({
            controller: "homeCtrl",
            templateUrl: "/templates/home.html"
        })
});
app.controller("homeCtrl", function($scope, $http){
    $scope.message = "Hello from Home"; // proves controllers get called when they are needed
    $scope.changeFoo = function(){
        $scope.foo = "bar : " + Math.random();
    }
});
app.controller("peopleCtrl", function($scope, $http){
    $scope.message = "Hello from People";
    var people = [
        {name : "Larry"},
        {name : "Curly"},
        {name : "Moe"},
    ];
    $scope.people = people;   
    $scope.remove = function(person){
        //person.name = person.name.toUpperCase();
        var index = people.indexOf(person);
        people.splice(index, 1);
        console.log(person);
    }
});
app.controller("thingsCtrl", function($scope, $http){
    $scope.message = "Hello from Things";
});
// angular.module("app").controller.... <- can also do this