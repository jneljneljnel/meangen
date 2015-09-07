'use strict';

angular.module('meangenApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    var refresh = function() {
      $http.get('/api/things').success(function(awesomeThings) {
        $scope.awesomeThings = awesomeThings;
        
      });
    };


    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things/', { name: $scope.newThing });
     
      refresh();
    };


    $scope.addComment = function(thing) {
      $scope.newindex=thing.comment.length;
      $scope.newcmt=thing.newcmt;
      thing.comment[$scope.newindex] = $scope.newcmt;
      
      $http.put('/api/things/' + thing._id, thing).success(function(response) {
        refresh();
        console.log(thing);
      })
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
      refresh();
    };


  });
