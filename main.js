<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script>
let Location = "101280102" //广州番禺  (宝安：101280605  高州：101282002)
let key = "17997d189efd4e45b849f995679f6205"
let url = 'https://devapi.qweather.com/v7/weather/now?location='+location+'&key='+key
$.get("https://devapi.qweather.com/v7/weather/now", {
        "location":Location,
        "key":key
    },
    function(ret){
        if(typeof ret =='object'){
            let date = ret.now.obsTime.substring(5, 13).replace("-","月").replace("T","日").concat("时")
            let weather = ret.now.text
            let wind = ret.now.windDir
            let temp = ret.now.temp
            let content = date + " 番禺:" + " " + weather + " " +wind + " " +temp + "℃"
            if(content.indexOf( '0' ) == 0){ content = content.substring(1)}
                window.document.title=content}})
</script>
