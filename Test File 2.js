// This is a test by Fred.
// Now I am adding a second line.

<body>
    <p>Getting started with Firebase</p>
    <h1 id="bigOne">Wakanda Forever</h1>
</body>


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-database.js"></script>


<script>
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

    // getting the text value from the database
    var bigOne = document.getElementById('bigOne');
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => bigOne.innerText = snap.val());



</script>