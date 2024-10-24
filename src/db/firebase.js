import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDZb5xBACFmjKhMOTdOo2QhS8bRbgB41AI",
    authDomain: "proyecto-react-afa56.firebaseapp.com",
    projectId: "proyecto-react-afa56",
    storageBucket: "proyecto-react-afa56.appspot.com",
    messagingSenderId: "319996809307",
    appId: "1:319996809307:web:d8a65c0e6734c40d41af7e"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db