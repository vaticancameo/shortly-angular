// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.signin = function () {
    $scope.signinInvalid = false;
    $scope.signinUnavailable = false;
    if ($scope.user.username && $scope.user.password) {
      $scope.signinInvalid = false;
      $scope.signinUnavailable = false;
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
          $scope.signinUnavailable = true;
          Auth.clearForms($scope.user);
        });
    } else {
      $scope.signinInvalid = true;
      Auth.clearForms($scope.user);
    }
  };

  $scope.signup = function () {
    $scope.signupInvalid = false;
    $scope.signupUnavailable = false;
    if ($scope.user.username && $scope.user.password) {
      $scope.signupInvalid = false;
      $scope.signupUnavailable = false;
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
          $scope.signupUnavailable = true;
          Auth.clearForms($scope.user);
        });
    } else {
      $scope.signupInvalid = true;
      Auth.clearForms($scope.user);
    }
  };
});
