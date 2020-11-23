alert("javascript edited and included from from WebStorm");

    // getting the text value from the database
    var bigOne = document.getElementById('bigOne');
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => bigOne.innerText = snap.val());

    alert("FINISHED getting text value from the database");










