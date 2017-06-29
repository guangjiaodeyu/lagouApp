/**
 * Created by Administrator on 2017/6/19.
 */
'use strict';
angular.module('app')
.controller('registerCtrl',['$scope','$http','$interval','$state',function ($scope,$http,$interval,$state) {
    $scope.submit = function () {
        //console.log($scope.user);
        $http.post('data/regist.json',$scope.user).success(function (res) {
            console.log(res);
            $state.go('login');

        })
    };

    $scope.send = function () {
      $http.get('data/code.json').success(function (res) {
          //console.log(res.state);
          var count = 60;
          if (1===res.state){
              //开启倒计时

              var timer = $interval(function () {
                  if (count <= 0){
                      $interval.cancel(timer);
                      $scope.time = '';
                      return;
                  }

                  count --;
                  $scope.time = count;
              },1000);

          }
      })
    }
}]);