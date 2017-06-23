/**
 * Created by Administrator on 2017/6/19.
 */
'use strict';
angular.module('app')
    .directive('appTab',[function () {
        return {
            restrict:'A',
            replace:true,
            templateUrl:'view/template/appTab.html'
        }
    }]);