angular.module('devmtnTravel')
  .controller('locationsCtrl', function($scope, mainSrv){

    $scope.locations = mainSrv.travelInfo;
    console.log($scope.locations);//use to check to make sure you are getting the propeties.

  });
