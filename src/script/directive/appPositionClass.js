/**
 * Created by Administrator on 2017/6/22.
 */
'use strict';
angular.module('app').directive('appPositionClass',[function () {
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/appPositionClass.html',
        scope:{
            com:'='
        },
        link:function ($scope) {

            $scope.showPositionList = function (idx) {
                $scope.positionList = $scope.com.positionClass[idx].positionList;
                $scope.isActive = idx;
            };



            $scope.$watch('com',function (newVal) {
                if (newVal){
                    $scope.showPositionList(0);
                }
            })


            ;
        }
    }
}]);