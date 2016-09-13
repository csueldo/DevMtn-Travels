angular.module('devmtnTravel')
  .controller('packagesCtrl', function($scope, mainSrv){

    $scope.packages = mainSrv.travelInfo;
    console.log($scope.packages);

  });
