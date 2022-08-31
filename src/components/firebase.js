

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKhPTki-0nxisnVvx68TG20Ldu8kd3YA8",
    authDomain: "clone-reactjs-49e4c.firebaseapp.com",
    projectId: "clone-reactjs-49e4c",
    storageBucket: "clone-reactjs-49e4c.appspot.com",
    messagingSenderId: "114816528018",
    appId: "1:114816528018:web:7292440d549fe72324804b",
    measurementId: "G-C0WJ0Y10XC"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();


export { db, auth };