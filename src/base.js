import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAqJU_kV8k-T-eSc718aQbdhjgaHGm0CXA",
    authDomain: "habit-tracker-f5406.firebaseapp.com",
    databaseURL: "https://habit-tracker-f5406.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;