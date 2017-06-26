/**
 * Created by Administrator on 2017/6/26.
 */
'use strict';
angular.module('app').filter('filterByObj',[function () {
    return function (list, obj) {//参数1：数组；参数2：要过滤的对象
        //遍历数组


        var result = [];
        angular.forEach(list,function (item) {
            var isEqual = true;
            for (var e in obj){
                if (item[e] !== obj[e]){
                    isEqual = false;
                }
            }
            if (isEqual){
                result.push(item);
            }
        });


        return result;


    }
}]);