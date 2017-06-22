/**
 * Created by Administrator on 2017/6/21.
 */
'use strict';
angular.module('app').directive('appHeadBar',[function () {
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/appHeadBar.html',
        scope:{
            text:'='
        },
        link:function ($scope) {
            $scope.goBack = function () {
                window.history.back();
            }
        }
    }
}]);