    alert("ONPAGE JAVASCRIPT START");

    document.onload = function() {checkCookies()};

        function checkCookies() {

        if (navigator.cookieEnabled == true) {
            alert("Cookies are enabled.");
        } else {
            alert("Cookies are not enabled.");
         }
        }


    alert("ONPAGE JAVASCRIPT END");











