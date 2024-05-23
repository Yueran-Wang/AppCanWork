(function($) {
    appcan.button("#nav-left", "btn-act", function() {
        appcan.window.open({
            name: 'personal',
            data: 'personal.html',
            aniId: 5,
            type: 0
        });
    });

    appcan.button("#nav-right", "btn-act", function() {});
    
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        return undefined;
    }
    
    // 获取来源页面
    var fromPage = getQueryVariable("from");

    appcan.button("#submit", "ani-act", function() {
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        // 检查用户名和密码是否为空
        if (username === "" || password === "") {
            appcan.window.alert({
                title: "登录失败",
                content: "用户名和密码不能为空，请填写完整！",
                buttons: ['确定'],
                callback: function(err, data, dataType, optId) {
                    console.log("Alert closed");
                }
            });
            return false; // 阻止表单默认提交
        }

        // 验证用户名和密码
        if (username === "admin" && password === "admin") {
            // 登录成功，将用户名存储在本地存储中
            appcan.locStorage.setVal("username", username);

            // 提示登录成功
            appcan.window.alert({
                title: "登录成功",
                content: "您已成功登录！",
                buttons: ['确定'],
                callback: function(err, data, dataType, optId) {
                    console.log("Successful login", err, data, dataType, optId);
                    var targetPage = fromPage ? `${fromPage}.html` : 'default.html';
                    uexWindow.close('-1');
                    appcan.window.open({
                        name: "",
                        data: targetPage,
                        aniId: 5,
                        reload: false,
                    });
                }
            });
        } else {
            // 登录失败，显示错误提示
            appcan.window.alert({
                title: "登录失败",
                content: "用户名或密码错误，请重试！",
                buttons: ['确定'],
                callback: function(err, data, dataType, optId) {
                    console.log("Alert closed");
                }
            });
        }
        return false; // 阻止表单默认提交
    });

    $("form").on('submit', function() {
        // 提交表单时的操作
        return false; // 阻止真实的表单提交
    });
})($);