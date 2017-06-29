/**
 * Created by Administrator on 2017/6/21.
 */
'use strict';
angular.module('app').directive('appPositionInfo',['$http',function ($http) {
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/appPositionInfo.html',
        scope:{
            isActive:'=',
            isLogin:'=',
            pos:'='
        },
        link:function ($scope) {


            $scope.$watch('pos',function (newValue) {
                if (newValue){
                    $scope.pos.select = $scope.pos.select || false;
                    $scope.imgPath = $scope.pos.select ? 'image/star-active.png' : 'image/star.png';
                }
            });





            $scope.favorite = function () {
                $http.post('data/favorite.json',{
                    id:$scope.pos.id,
                    select:!$scope.pos.select
                }).success(function (res) {
                    $scope.pos.select = !$scope.pos.select;
                    $scope.imgPath = $scope.pos.select ? 'image/star-active.png' : 'image/star.png';
                })
            }
        }
    }
}]);