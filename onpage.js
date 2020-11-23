    alert("ONPAGE JAVASCRIPT START");

    document.onload = function() {checkCookies()};

        function checkCookies() {
        var text = "";

        if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
        document.getElementById("demo").innerHTML = text;
    }


    alert("ONPAGE JAVASCRIPT END");











