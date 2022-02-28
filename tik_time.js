var x = setInterval(function() {

    if (time < 0) {
        clearInterval(x);
    } else {
        showTime(time)
        time--;
    }
    
}, 1000);