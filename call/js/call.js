(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.window.open({
            name: 'index',
            data: 'index.html',
            aniId: 5,
            type: 0
        });
    });
    appcan.button("#nav-right", "btn-act",
    function() {});

    document.addEventListener("DOMContentLoaded", function() {
        // 拨号功能
        function dialNumber(phoneNumber) {
            if (uexCall && typeof uexCall.dial == 'function') {
                uexCall.dial(phoneNumber);
            } else {
                console.error("uexCall plugin is not available.");
            }
        }

        // 为每个调用操作添加事件监听器
        document.getElementById('call-1').addEventListener('click', function() {
            dialNumber('1333333');
        });

        document.getElementById('call-2').addEventListener('click', function() {
            dialNumber('18888');
        });

        document.getElementById('call-3').addEventListener('click', function() {
            dialNumber('2222222');
        });
    });
	
})($);