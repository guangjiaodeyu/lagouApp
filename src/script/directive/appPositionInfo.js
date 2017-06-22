/**
 * Created by Administrator on 2017/6/21.
 */
'use strict';
angular.module('app').directive('appPositionInfo',[function () {
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
            $scope.imgPath = $scope.isActive ? 'image/star-active.png' : 'image/star.png'

        }
    }
}]);