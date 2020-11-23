    alert("ONPAGE JAVASCRIPT START");

    <body>
    <p>Getting started with Firebase</p>
    <h1 id="bigOne">Wakanda Forever</h1>
    </body>

    window.onload = function() {
        alert('Page is loaded >>> doing database read');

        // getting the text value from the database
        var bigOne = document.getElementById('bigOne');
        var dbRef = firebase.database().ref().child('text');
        dbRef.on('value', snap => bigOne.innerText = snap.val());

        alert('FINISHED database read');

    };


    alert("ONPAGE JAVASCRIPT END");











