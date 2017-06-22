/**
 * Created by Administrator on 2017/6/19.
 */
'use strict';
angular.module('app')
    .directive('appHead',[function () {
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/template/head.html'
        }
    }]);