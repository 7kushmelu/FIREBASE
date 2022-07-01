// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtWTuiQ5BcXjZ9cWs4oZDueOKSNCwmrGE",
    authDomain: "reactnativefirebase-3c223.firebaseapp.com",
    projectId: "reactnativefirebase-3c223",
    storageBucket: "reactnativefirebase-3c223.appspot.com",
    messagingSenderId: "133661204399",
    appId: "1:133661204399:web:e4dc83d7988f296111d95a",
    measurementId: "G-8NC1KMV2HX"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    const app = initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth();
export { auth };