/**
 * Created by Administrator on 2017/6/21.
 */
'use strict';
angular.module('app').directive('appSheet',[function () {
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/appSheet.html',
        scope:{
            visible:'='
        }
    }
}]);