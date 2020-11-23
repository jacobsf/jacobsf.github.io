alert("HEADER JAVASCRIPT: includes Firebase inits");


// added by Fred. Initialize Firebase.

<!-- The core Firebase JS SDK is always required and must be listed first -->
$.getScript("https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js", function() {
    alert("FIREBASE JS SDK: Script loaded but not necessarily executed.");
});

// <!-- TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
$.getScript("https://www.gstatic.com/firebasejs/8.0.1/firebase-analytics.js", function() {
    alert("FIREBASE ANALYTICS: Script loaded but not necessarily executed.");
});

$.getScript("https://www.gstatic.com/firebasejs/8.0.1/firebase-database.js", function() {
    alert("FIREBASE DATABASE: Script loaded but not necessarily executed.");
});


    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
    apiKey: "AIzaSyA4x6htT7vOI6Z9aSTzY0-fIzqnqZLljpk",
    authDomain: "hello-world-test-by-fred.firebaseapp.com",
    databaseURL: "https://hello-world-test-by-fred.firebaseio.com",
    projectId: "hello-world-test-by-fred",
    storageBucket: "hello-world-test-by-fred.appspot.com",
    messagingSenderId: "55052545917",
    appId: "1:55052545917:web:22dd3624bbed0b2cffe614",
    measurementId: "G-QW9SSLTXSP"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();









// added by Fred. A script to include HTML. Source is W3 Schools.

    function includeHTML() {
    // noinspection ES6ConvertVarToLetConst
        var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
    /* Make an HTTP request using the attribute value as the file name: */
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
    if (this.status == 200) {// noinspection JSReferencingMutableVariableFromClosure
        elmnt.innerHTML = this.responseText;}
    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
    /* Remove the attribute, and call this function once more: */
    elmnt.removeAttribute("w3-include-html");
    includeHTML();
}
}
    xhttp.open("GET", file, true);
    xhttp.send();
    /* Exit the function: */
    return;
}
}
}








