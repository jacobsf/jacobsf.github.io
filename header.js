alert("HEADER JAVASCRIPT: includes Firebase inits");


// ============================================================



    // Code that Fred found on StackExchange for changing images./*


    // noinspection JSUnresolvedFunction
    $(function() {
    const pictures = [
//1
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Number_1_in_green_rounded_square.svg/512px-Number_1_in_green_rounded_square.svg.png",
//2
    "https://images-na.ssl-images-amazon.com/images/I/814x6GWAgEL._AC_SL1500_.jpg",
//3
    "https://static.dazzling.news/img/articles/3187/800x800/5a589e3b0b4de_three-706895_960_720.jpg",
    //4
    "https://i1.wp.com/mysoulurgenumber.com/wp-content/uploads/2018/10/soul-urge-number-4.png?fit=1442%2C1442&ssl=1",
    //5
    "https://www.astrogle.com/images/2014/09/number-52.jpg",
    //6
    "https://www.pngfind.com/pngs/m/98-983768_numbers-png-number-6-clipart-png-transparent-png.png",
    //7
    "https://image.shutterstock.com/image-vector/vector-illustration-realistic-retro-signboard-260nw-277121081.jpg",
    //8
    "https://image.shutterstock.com/image-illustration/3d-shiny-red-number-collection-260nw-120044464.jpg",
    //9
    "https://www.pngitem.com/pimgs/m/520-5208480_number-9-cliparts-numbers-png-cartoon-transparent-png.png",
    //10
    "https://i.ytimg.com/vi/FNEJXKTSkYM/maxresdefault.jpg"
    ];

    // Callback function pass an array


    // noinspection ES6ConvertVarToLetConst
    var j=0;

    function changeImg(array) {

    // Pass the array to shuffle function get result

    // noinspection UnnecessaryLocalVariableJS
    var url = shuffle(array);

    /* Asign the result to src attribute of img
    || Note: the bracket notation [0]
    || this dereferences the jQuery Object, thus
    || changing it into a plain object
    || Once a plain object, simple properties
    || such as .src may be used.
    */
    // noinspection JSUnresolvedFunction
    $('.imageWrapper img')[0].src = url;

    // This is the equivelant in jQuery
    // $('.imageWrapper img').attr('src', url);

    /* Solution for Squaresoft images */
    /* This should work granted that the array pictures has
    || the appropriate urls pointing to images uploaded to
    || the site.
    */
    /* ALT 1. All attributes grouped
       $('.imageWrapper img').attr({
         'src': url+'?format=1500w',
         'data-src': url,
         'data-image': url
       });
    */
    /* ALT 2. attr() and .data() chained
       $('.imageWrapper img').att('src', url+'?format=1500w').data({'src': url, 'image':url});
    */
    /* ALT 3. Dereferenced jQObj and plain JavaScript
       $('.imageWrapper img')[0].src = url+'?format=1500w';
       $('.imageWrapper img')[0].setAttribute('data-src', url);
       $('.imageWrapper img')[0].setAttribute('data-image', url);
    */
}


    // Fisher-Yates Shuffle
    // https://stackoverflow.com/a/962890/2813224
    function shuffle(array) {

    j=j+1
    if (j>9) {
    j=0
}

    return array[j];
}

    // Added for demo purposes
    $('button').on('click', function() {
    changeImg(pictures);
    // alert("DOUBLE CHANGE.");
    // changeImg(pictures);

    setInterval(function(){changeImg(pictures);}, 3000);


});

});


// ============================================================

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

// ============================================================





// added by Fred. Initialize Firebase.

    alert("starting firebase initilization");


<!-- The core Firebase JS SDK is always required and must be listed first -->
$.getScript("https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js", function() {
    alert("FIREBASE JS SDK: Script loaded but not necessarily executed.");
});

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->

$.getScript("https://www.gstatic.com/firebasejs/8.0.1/firebase-analytics.js", function() {
    alert("FIREBASE ANALYTICS: Script loaded but not necessarily executed.");
});

$.getScript("https://www.gstatic.com/firebasejs/8.0.1/firebase-database.js", function() {
    alert("FIREBASE DATABASE: Script loaded but not necessarily executed.");
});

    alert("FINISHED FIREBASE LOADS");




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

    alert("FINISHED CREATING FIREBASE CONFIG OBJECT");


// Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();


    alert("FINISHED initializing firebase");

// getting the text value from the database
var bigOne = document.getElementById('bigOne');
alert("var bigOne");

bigOne.innerText = "Fred";
alert("Fred");

// var dbRef = firebase.database().ref().child('text');
// alert("var dbRef");

// dbRef.on('value', snap => bigOne.innerText = snap.val());






