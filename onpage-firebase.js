// getting the text value from the database

function run_it() {
    alert("run_it function");

    var bigOne = document.getElementById('bigOne');
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => bigOne.innerText = snap.val());
    }
