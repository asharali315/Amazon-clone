import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDxtZbWeZUmyQsw27w6SedQWJuW64fxRuA",
    authDomain: "clone-db-f3b16.firebaseapp.com",
    databaseURL: "https://clone-db-f3b16.firebaseio.com",
    projectId: "clone-db-f3b16",
    storageBucket: "clone-db-f3b16.appspot.com",
    messagingSenderId: "197744922076",
    appId: "1:197744922076:web:3de2bf3c7c31c0582b5319",
    measurementId: "G-6WTNN58MXQ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }