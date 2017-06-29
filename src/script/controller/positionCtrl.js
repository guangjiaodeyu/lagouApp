/**
 * Created by Administrator on 2017/6/21.
 */
'use strict';
angular.module('app').controller('positionCtrl',['$q','$scope','$http','$log','$state','cache',function ($q,$scope,$http,$log,$state,cache) {


    $scope.isLogin = !!cache.get('name');
    $scope.message = $scope.isLogin ? '投个简历':'请登录';

    function getPosition() {
        var def = $q.defer();

        $http.get('data/position.json?id='+$state.params.id).success(function (res) {
            $scope.position = res;
            def.resolve(res);

            if (res.posted){
                $scope.message = '已投递';
            }
        }).error(function (err) {
            def.reject(err)
        });

        return def.promise;
    }



    function getCompany(id) {
        $http.get('data/company.json?id=' + id).success(function (res) {
            $scope.company = res;
        })
    }


    getPosition().then(function (obj) {
        getCompany(obj.companyId);
    });


    $scope.go = function () {

        if ($scope.message !== '已投递'){

            if ($scope.isLogin){

                $http.post('data/handle.json',{
                    id:$scope.position.id
                }).success(function (res) {
                    $log.info(res);
                    $scope.message = '已投递';
                });
            }else {
                $state.go('login');
            }
        }

    }




}]);