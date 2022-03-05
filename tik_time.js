var x = setInterval(function() {

    if (time < 0) {
        clearInterval(x)
        showLastScene()
    } else {
        showTime(time)
        time--
    }
    
}, 1000);