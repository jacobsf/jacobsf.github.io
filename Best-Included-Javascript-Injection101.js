alert("Injected Best Included Javascript101b");


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
    var bigOne1 = document.getElementById('bigOne1');
    var bigOne2 = document.getElementById('bigOne2');
    var bigOne3 = document.getElementById('bigOne3');
    var bigOne4 = document.getElementById('bigOne4');
    var bigOne5 = document.getElementById('bigOne5');
    var bigOne6 = document.getElementById('bigOne6');
    var bigOne7 = document.getElementById('bigOne7');
    var bigOne8 = document.getElementById('bigOne8');

    var dbRef1 = firebase.database().ref().child('live1');
    var dbRef2 = firebase.database().ref().child('live2');
    var dbRef3 = firebase.database().ref().child('live3');
    var dbRef4 = firebase.database().ref().child('live4');
    var dbRef5 = firebase.database().ref().child('live5');
    var dbRef6 = firebase.database().ref().child('live6');
    var dbRef7 = firebase.database().ref().child('live7');
    var dbRef8 = firebase.database().ref().child('live8');


// ============================================================
// Code that Fred found on StackExchange for changing images.

// noinspection JSUnresolvedFunction
    $(function () {
        const pictures = [
            //1
            "place_holder",
            //2
            "place_holder",
            //3
            "place_holder",
            //4
            "place_holder",
            //5
            "place_holder",
            //6
            "place_holder",
            //7
            "place_holder",
            //8
            "place_holder"
        ];

        // writing the data to the web page
        dbRef1.on('value', snap => bigOne1.innerText = snap.val());
        dbRef2.on('value', snap => bigOne2.innerText = snap.val());
        dbRef3.on('value', snap => bigOne3.innerText = snap.val());
        dbRef4.on('value', snap => bigOne4.innerText = snap.val());
        dbRef5.on('value', snap => bigOne5.innerText = snap.val());
        dbRef6.on('value', snap => bigOne6.innerText = snap.val());
        dbRef7.on('value', snap => bigOne7.innerText = snap.val());
        dbRef8.on('value', snap => bigOne8.innerText = snap.val());

        dbRef1.on('value', snap => pictures[0] = snap.val());
        dbRef2.on('value', snap => pictures[1] = snap.val());
        dbRef3.on('value', snap => pictures[2] = snap.val());
        dbRef4.on('value', snap => pictures[3] = snap.val());
        dbRef5.on('value', snap => pictures[4] = snap.val());
        dbRef6.on('value', snap => pictures[5] = snap.val());
        dbRef7.on('value', snap => pictures[6] = snap.val());
        dbRef8.on('value', snap => pictures[7] = snap.val());


        // Callback function pass an array
        function changeImg(array) {
            var url = shuffle(array);
            $('.imageWrapper img')[0].src = url;
        }

        var j = 0;




        function shuffle(array) {
            j = j + 1
            if (j > 7) {
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