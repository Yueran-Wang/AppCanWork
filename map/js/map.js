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

    appcan.ready(function() {
        appcan.button("#fetchAddress", "btn-act", function() {
            // 使用固定的经纬度（厦门）
            var longitude = 118.0895;
            var latitude = 24.4798;
            
            // 调用 fetchAddress 函数获取并显示地址信息
            fetchAddress(longitude, latitude);
        });
    });

    function fetchAddress(longitude, latitude) {
        var apiKey = '323207a50a7acae1bd6faac97b83a611';
        var url = "https://restapi.amap.com/v3/geocode/regeo";
        
        url += '?location=' + longitude + ',' + latitude + '&key=' + apiKey;

        appcan.request.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(result) {
                console.log("请求成功: ", result); // 控制台输出响应结果
                if (result.status == '1' && result.regeocode) {
                    var addressComponent = result.regeocode.addressComponent;
                    // 更新 HTML 元素
                    $('#postalCode').text(addressComponent.adcode || '-');
                    $('#province').text(addressComponent.province || '-');
                    $('#city').text(addressComponent.city || '-');
                    $('#district').text(addressComponent.district || '-');
                } else {
                    appcan.window.alert("错误", "获取地址信息失败: " + result.info, "确定");
                }
            },
            error: function(xhr, errorType, error) {
                console.log("请求错误: ", xhr, errorType, error); // 控制台输出错误信息
                appcan.window.alert("错误", "请求错误: " + (error || "网络请求失败"), "确定");
            }
        });
    }

})($);