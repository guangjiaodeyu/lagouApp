/**
 * Created by Administrator on 2017/6/28.
 */
'use strict';
angular.module('app').config(['$validationProvider',function ($validationProvider) {
    //表达式校验表单元素的值是否符合要求
    var expression = {
        phone:/^1[\d]{10}$/,
        password:function (value) {
            var str = value + '';
            return str.length > 5;
        },
        required:function (value) {
            return !!value;    //value不能为空
        }

    };

    //错误提示
    var defaultMsg = {

        phone:{
            success:'',
            error:'手机号码必须是11位'
        },
        password:{
            success:'',
            error:'长度至少6位'
        },
        required:{
            success:'',
            error:'不能为空'
        }

    };


    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);