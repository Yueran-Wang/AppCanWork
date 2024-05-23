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
        fetchWeatherForecast();
    });

    function fetchWeatherForecast() {
        var apiKey = '323207a50a7acae1bd6faac97b83a611';
        var cityCode = "350203";
        var url = "https://restapi.amap.com/v3/weather/weatherInfo";

        // 构造完整的请求 URL
        url += '?city=' + cityCode + '&key=' + apiKey + '&extensions=all';

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(result) {
                if (result.status == '1' && result.forecasts && result.forecasts.length > 0) {
                    var forecasts = result.forecasts[0];
                    displayWeatherForecast(forecasts);
                } else {
                    appcan.window.alert("错误", "获取天气预报信息失败: " + result.info, "确定");
                }
            },
            error: function(xhr, errorType, error) {
                appcan.window.alert("错误", "请求天气预报错误: " + (error || "网络请求失败"), "确定");
            }
        });
    }

    function displayWeatherForecast(forecast) {
        var days = ["day1", "day2", "day3", "day4"];
        var weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

        for (var i = 0; i < forecast.casts.length; i++) {
            var cast = forecast.casts[i];
            var dayLi = $("#" + days[i]); // Get the correct day's <ul> by id
            dayLi.find(".ulev-app2").text(weekdays[new Date(cast.date).getDay()]); // Set the day of the week
            dayLi.find(".ub-f1").text(cast.daytemp + "℃"); // Set the temperature
            dayLi.find(".ulev-2").text(cast.nighttemp + "℃/" + cast.daytemp + "℃"); // Set the min/max temperature
        }
    }
    
})($);