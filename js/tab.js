(function($) {
   
    document.addEventListener('DOMContentLoaded', function () {
        // 绑定点击事件到各个 tab
        document.getElementById('homeTab').addEventListener('click', function() {
            appcan.window.open({
                name: 'index',
                data: 'index.html'
            });
        });
    
        document.getElementById('guideTab').addEventListener('click', function() {
            appcan.window.open({
                name: 'tutorials',
                data: 'tutorials.html'
            });
        });
    
        document.getElementById('personalTab').addEventListener('click', function() {
            appcan.window.open({
                name: 'personal',
                data: 'personal.html'
            });
        });
    });

})($);