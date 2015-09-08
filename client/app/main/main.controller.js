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
      if(thing.newcmt == '') {
        return;
      }
      $scope.newcmt = thing.comment;
      $scope.newcmt.push(thing.newcmt);
      console.log($scope.newcmt)
      $http.put('/api/things/' + thing._id, {comment : $scope.newcmt }, {safe: true, upsert: true, new : true}).success(function(response) {
        
        console.log(response);
        refresh();
       
      })
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
      refresh();
    };


  });
