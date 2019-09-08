/*登录*/
function requestJson(){
    var name =$("#username").val();//#是id选择器
    var pwd =$("#password").val();
    if(name==="" || null == name){
        alert("用户名不能为空！");
    }else {
        if(pwd==="" || null == pwd){
            alert("密码不能为空！");
        }else{
            $.ajax({
                type:'post',
                url:'checklogin',
                dataType:"text",//dataType
                async: true,
                data:{username:name,password:pwd},
                success:function(jsonStr){
                    if(jsonStr.length === 0 || jsonStr === null){
                        alert("没有这个用户！");
                    }
                    else{
                        alert("登录成功");
                        window.location.href ="success";
                    }
                }
            });
        }
    }
}

/*注册*/
function registeredJson() {
    var rename = $("#user_name").val();//#是id选择器
    var raped = $("#user_password").val();
    var rapids = $("#user_password_one").val();
    var repine = $("#user_phone").val();
    var remain = $("#user_email").val();
    //正则表达式
    var redone = /^1([34578])\d{9}$/;
    var regain = /^[A-Za-z0-9]+[@][a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)+$/;

    if (!rename) {
        alert("账号不能为空!");
    } else {
        if (!raped) {
            alert("密码不能为空!");
        } else {
            if (!rapids) {
                alert("请重新输入密码!");
            } else if (rapids !== raped) {
                alert("两次输入的密码不一致,请重新输入!");
            } else {
                if (!repine) {
                    alert("请输入手机号!");
                } else {
                    if (!redone.test(repine)) {
                        alert("请输入有效的手机号!")
                    } else {
                        if (!remain) {
                            alert("请输入邮箱!");
                        } else {
                            if (!regain.test(remain)) {
                                alert("请输入正确的邮箱格式!!");
                            } else {
                                $.post(
                                    "/registration",
                                    {
                                        username: rename,
                                        password: raped,
                                        phone: repine,
                                        email: remain
                                    },
                                    function (data) {
                                        if (data !== "success") {
                                            alert("该账号已被注册!");
                                            window.location.href = '#';
                                        } else {
                                            alert("注册成功！请在左侧登录!");
                                            window.location.href = '#';
                                        }
                                    },
                                    "text"
                                )
                            }
                        }
                    }
                }
            }
        }
    }
}