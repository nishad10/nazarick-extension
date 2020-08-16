import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import secrets from 'secrets';
import * as firebase from 'firebase';
import 'firebase/firestore';

console.log('This is the background page.');
console.log('Put the background scripts here.');

const firebaseConfig = {
  apiKey: secrets.APIKEY,
  authDomain: secrets.AUTHDOMAIN,
  databaseURL: secrets.DATABASEURL,
  projectId: secrets.PROJECTID,
  storageBucket: secrets.STORAGEBUCKET,
  messagingSenderId: secrets.MESSAGINGSENDERID,
  appId: secrets.APPID,
  measurementId: secrets.MEASUREMENTID,
};

// DB Connection Init
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Watchdog on value change modify localstorage for frontend
db.ref('/backend/').on('value', function (snapshot) {
  window.localStorage.setItem('ngrok', JSON.stringify(snapshot.val().ngrok));
});

// Fetch and update backend at an interval
/*
window.setInterval(() => {
  db.ref('/backend/').child('ngrok').set('test10');
}, 1000 * 60 * 50000);
*/
