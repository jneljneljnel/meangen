'use strict';

angular.module('meangenApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.comments = [];
    $scope.vote = 0;
  
        

    $scope.upVote = function (thing) {
      thing.upvotes++;
      $http.put('/api/things/' + thing._id, thing).success(function(response) {    
      $scope.thing=response;
      refresh();
      })    
    }

    $scope.downVote = function (thing) {
        thing.upvotes--;
        $http.put('/api/things/' + thing._id, thing).success(function(response) {    
        $scope.thing=response;
        refresh();
      })    
        
    }
  
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
   

    });

    var refresh = function() {
      $http.get('/api/things').success(function(awesomeThings) {
        $scope.awesomeThings = awesomeThings;
        $scope.newthing.url = '';
        
      });
    };


    $scope.addThing = function(newthing) {
      if($scope.newThing === '' ) {
        return;
      }
      $http.post('/api/things/', newthing ).success(function(){
          refresh();
      });
     
  
    };


    

      // //when passing in thing and not thingid as an argument
      // $scope.array = [];
      // $scope.list="";
      // $scope.array = thing.comments;
      // $scope.newcmt = thing.newcmt;
      // $scope.array.push($scope.newcmt); 
      // $scope.list = $scope.array.slice();
      // console.log($scope.array);
      // console.log($scope.list);
      // console.log($scope.newcmt);
  
      // //when passing in thingid and not thing as an argument
      // $http.get('/api/things/' + thingid).success(function(response) {
      // $scope.thing = response;
      // $scope.thing.comments = ['omg', 'does this work?'];
      // console.log( $scope.thing);
        // $http.put('/api/things/' + thingid, $scope.thing, {safe: true, upsert: true, new : true}).success(function(response) {    
        //  $scope.thing=response;
        //  console.log( $scope.thing);
        // refresh();
        // })
      // });
      
     
    //};

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
      refresh();
    };


  });
