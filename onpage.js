    alert("ONPAGE JAVASCRIPT START");

    // getting the text value from the database
    var bigOne = document.getElementById('bigOne');
    alert("var bigOne");

    var dbRef = firebase.database().ref().child('text');
    alert("var cbRef");

    // dbRef.on('value', snap => bigOne.innerText = snap.val());



    alert("ONPAGE JAVASCRIPT END");











