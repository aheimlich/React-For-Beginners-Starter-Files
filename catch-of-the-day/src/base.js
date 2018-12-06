import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBd67qQ909bF3oJfeIV1Tjy1uiupcpetAw",
    authDomain: "catch-of-the-day-aheimlich.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-aheimlich.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is named export
export { firebaseApp };

// This is a default export
export default base;