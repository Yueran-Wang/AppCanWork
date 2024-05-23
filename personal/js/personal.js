(function($) {
    appcan.button("#nav-left", "btn-act", function() {
        appcan.window.open({
            name: 'index',
            data: 'index.html'
        });
    });
    appcan.button("#nav-right", "btn-act",
    function() {});
	
    window.uexOnload = function(type) {
        var username = appcan.locStorage.val("username");
        if (!username) {
            // 显示“未登录”在页面上
            $('#usernameDisplay').text("未登录");
        } else {
            // 如果用户已登录，显示用户名
            $('#usernameDisplay').text(username);
        }
    };    
    
    // 退出登录
    $('#logout').on('click', function() {
        // 检查本地存储中是否有用户名
        var username = appcan.locStorage.val("username");
    
        if (!username) {
            // 如果没有用户名，提示当前已是未登录状态
            appcan.window.alert({
                title: "退出登录",
                content: "当前已是未登录状态！",
                buttons: ['确定']
            });
        } else {
            // 如果有用户名，执行退出操作
            // 清除本地存储中的用户名
            appcan.locStorage.remove('username');
    
            // 提示用户已退出
            appcan.window.alert({
                title: "退出登录",
                content: "您已成功退出登录！",
                buttons: ['确定'],
                callback: function(err, data, dataType, optId) {
                    // 刷新页面以更新状态
                    uexWindow.evaluateScript('', 0, 'location.reload();');
                }
            });
        }
    });

    // 登录页面
    $('#login').on('click', function() {
        appcan.window.open({
            name: 'login',
            data: 'login.html?from=personal',
            aniId: 5,
            reload: false,
        });
        uexWindow.close('-1');
    });

    // 动态列表
    var lv1 = appcan.listview({
        selector : "#listview1",
        type : "thinLine",
        hasIcon : false,
        hasAngle : false,
        hasControl : true,
    });
    lv1.set([{
        title : '<ul class="ub t-bla ub-ac ">' + '<li class="lis-icon-s ub ub-ac ub-pc">' + '<div class="ub-img setImg2 uwh-pS1"></div>' + '</li>' + '<li class="ub-f1 ut-s ulev-app1">允许按用户名搜索我</li>' + '</ul>',
        "switchBtn" : {
            value : false,
            mini : true
        }
    }, {
        title : '<ul class="ub t-bla ub-ac">' + '<li class="lis-icon-s ub ub-ac ub-pc">' + '<div class="ub-img setImg3 uwh-pS1"></div>' + '</li>' + '<li class="ub-f1 ut-s ulev-app1">新消息通知</li>' + '</ul>',
        "switchBtn" : {
            value : true,
            mini : true
        }
    }, {
        title : '<ul class="ub t-bla ub-ac">' + '<li class="lis-icon-s ub ub-ac ub-pc">' + '<div class="ub-img setImg4 uwh-pS1"></div>' + '</li>' + '<li class="ub-f1 ut-s ulev-app1">定位</li>' + '</ul>',
        "switchBtn" : {
            value : true,
            mini : true
        }
    }]);

    lv1.on("switch:change", function(ele, obj) {
        //  lv1.updateItem(ele,"title","Switch:"+obj.switchBtn.value);
    })
})($);