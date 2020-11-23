    alert("ONPAGE JAVASCRIPT START");

    window.onload = function() {
        alert('Page is loaded >>> doing database read');

        // getting the text value from the database
        var bigOne = document.getElementById('bigOne');
        var dbRef = firebase.database().ref().child('text');
        dbRef.on('value', snap => bigOne.innerText = snap.val());

    };


    alert("ONPAGE JAVASCRIPT END");











