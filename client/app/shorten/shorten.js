angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    Links.shorten($scope.link);
    console.log('--------------ADD LINK CALLED.')
  };
});
