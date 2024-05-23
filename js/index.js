(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {});
    appcan.button("#nav-right", "btn-act",
    function() {});

    // 拍照按钮
    $('#photo').on('click', function() {
        appcan.window.open({
            name: 'photo',
            data: 'photo.html',
            aniId: 10
        });
        uexWindow.close('-1');
    });

    // 定位按钮
    $('#map').on('click', function() {
        appcan.window.open({
            name: 'map',
            data: 'map.html',
            aniId: 10
        });
        uexWindow.close('-1');
    });

    // 天气按钮
    $('#weather').on('click', function() {
        appcan.window.open({
            name: 'weather',
            data: 'weather.html',
            aniId: 10
        });
        uexWindow.close('-1');
    });
    
    // 资讯按钮
    $('#zx').on('click', function() {
        appcan.window.open({
            name: 'tutorials',
            data: 'tutorials.html'
        });
        uexWindow.close('-1');
    });
    $('#open').on('click', function() {
        appcan.window.open({
            name: 'tutorials',
            data: 'tutorials.html'
        });
        uexWindow.close('-1');
    });

    // 设置按钮
    $('#set').on('click', function() {
        appcan.window.open({
            name: 'personal',
            data: 'personal.html'
        });
        uexWindow.close('-1');
    });
    
    // 电话按钮
    $('#call').on('click', function() {
        var username = appcan.locStorage.val("username");
                
        // 检查用户是否已登录
        if (!username) {
            appcan.window.alert({
                title: "登录提醒",
                content: "您需要登录才能访问该页面！",
                buttons: "确定",
                callback: function(err, data, dataType, optId) {
                    appcan.window.open({
                        name: 'login',
                        data: 'login.html?from=call',
                        aniId: 10
                    });
                    uexWindow.close('-1');
                }
            });
        } else {
            // 如果用户已登录，跳转到 call 页面
            appcan.window.open({
                name: 'call',
                data: 'call.html',
                aniId: 10
            });
            uexWindow.close('-1');
        }
    });

})($);