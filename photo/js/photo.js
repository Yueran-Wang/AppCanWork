(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.window.open({
            name: 'index',
            data: 'index.html',
            aniId: 5,
            type: 0
        });
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});
	
    document.addEventListener("DOMContentLoaded", function() {
        // 检查 AppCan 是否已加载
        window.uexOnload = function(type) {
            document.getElementById('takePhoto').addEventListener('click', function() {
                // 调用 uexCamera 打开摄像头拍照
                uexCamera.open(0, 75, function(picPath) {
                    console.log("Photo path:", picPath);
                    var photo = document.getElementById('photo');
                    photo.src = picPath;
                    photo.style.display = 'block';
                });
            });
        };
    });
    
})($);