angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function () {
    Links.links().then(function (val) {
      console.log('----------------------VAL', val);
      $scope.data.links = val;
    }).catch( function (error) {
        console.error(error);
      });
  };
  $scope.getLinks();
});

