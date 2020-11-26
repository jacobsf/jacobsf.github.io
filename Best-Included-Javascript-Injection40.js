alert("Injected Best Included Javascript40g");


alert("Waiting for page to finish loading.");
window.onload = function () {
   alert("The window is loaded. Now calling myFunction.");
    whenLoaded();
};

function whenLoaded() {

//    alert("The window is loaded. Now doing a simple text substitution.");
//    document.getElementById("bigOne").innerHTML = "The window is loaded.";

//    alert("The window is loaded. Now starting the Firebase stuff.");
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    // getting the text value from the database
    var bigOne = document.getElementById('bigOne');
    var dbRef = firebase.database().ref().child('fBase2');

// ============================================================
// Code that Fred found on StackExchange for changing images.

// noinspection JSUnresolvedFunction
    $(function () {
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

        // writing the data to the web page
        dbRef.on('value', snap => bigOne.innerText = snap.val());
        pictures[2] = document.getElementById('bigOne').innerText
        // pictures[2] = "https://www.legacy.com/wp-content/uploads/2020/07/paul_newman_1600x500-1200x900.png";


        // Callback function pass an array
        function changeImg(array) {
            var url = shuffle(array);
            $('.imageWrapper img')[0].src = url;
        }

        var j = 0;


        function shuffle(array) {
            j = j + 1
            if (j > 9) {
                j = 0
            }
            return array[j];
        }

        // Added for demo purposes
        $('button').on('click', function () {
            changeImg(pictures);
            setInterval(function () {
                changeImg(pictures);
            }, 3000);
        });

    });




}


// ============================================================
// Firebase configuration
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







// ============================================================
// A script to include HTML. Source is W3 Schools.

function includeHTML() {
    // noinspection ES6ConvertVarToLetConst
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain attribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {// noinspection JSReferencingMutableVariableFromClosure
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
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