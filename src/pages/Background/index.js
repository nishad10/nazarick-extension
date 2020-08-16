import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import secrets from 'secrets';
import * as firebase from 'firebase/app';
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

const app = firebase.initializeApp(firebaseConfig);
const database = app.database();
const db = app.firestore();
console.log(db.collection('nazarick-ffc4a').get());
console.log(database.app);
