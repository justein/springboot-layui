/**
 * 登录
 */
$(function(){
     layui.use(['form' ,'layer'], function() {
         var form = layui.form;
         var layer = layui.layer;
         form.on("submit(login)",function () {
             login();
             return false;
         });
         var path=window.location.href;
         if(path.indexOf("kickout")>0){
             layer.alert("您的账号已在别处登录；若不是您本人操作，请立即修改密码！",function(){
                 window.location.href="/login";
             });
         }
     })
 })

function login(){
    var username=$("#username").val();
    var password=$("#password").val();
    var rememberMe = $("#rememberMe").val();
    $.post("/user/login",$("#useLogin").serialize(),function(data){
        if(data.code == 1){
            window.location.href=data.url;
        }else{
            layer.alert(data.message,function(){
                layer.closeAll();//关闭所有弹框
            });
        }
    });
}

function addPeople() {

    var html ="<div class=\"layui-form-item\">\n"+
        "<label class=\"layui-form-label\">姓名：</label>\n" +
        "                <div class=\"layui-input-inline\">\n" +
        "                    <input type=\"password\" name=\"password\" required lay-verify=\"required\" placeholder=\"请输入姓名\" autocomplete=\"off\" class=\"layui-input\">\n" +
        "                </div>\n" +
        "                <label class=\"layui-form-label\">身份证号：</label>\n" +
        "                <div class=\"layui-input-inline\">\n" +
        "                    <input type=\"password\" name=\"password\" required lay-verify=\"required\" placeholder=\"请输入身份证号\" autocomplete=\"off\" class=\"layui-input\">\n" +
        "                </div>\n" +
        "                <label class=\"layui-form-label\">手机号：</label>\n" +
        "                <div class=\"layui-input-inline\">\n" +
        "                    <input type=\"password\" name=\"password\" required lay-verify=\"required\" placeholder=\"请输入手机号\" autocomplete=\"off\" class=\"layui-input\">\n" +
        "                </div></div>"
    $("#peoples").append(html);

}