(function($) {
    appcan.button("#nav-left", "btn-act", function() {
        appcan.window.open({
            name: 'index',
            data: 'index.html'
        });
    });
    appcan.button("#nav-right", "btn-act",
    function() {});

    $('#news-1').on('click', function() {
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
                        data: 'login.html?from=tutorials',
                        aniId: 10
                    });
                    uexWindow.close('-1');
                }
            });
        } else {
            appcan.window.open({
                name: 'newsDetail',
                data: 'newsDetail.html?item=1',
                aniId: 10
            });
            uexWindow.close('-1');
        }
    });
    
    $('#news-2').on('click', function() {
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
                        data: 'login.html?from=tutorials',
                        aniId: 10
                    });
                    uexWindow.close('-1');
                }
            });
        } else {
            appcan.window.open({
                name: 'newsDetail',
                data: 'newsDetail.html?item=2',
                aniId: 10
            });
            uexWindow.close('-1');
        }
    });
})($);

