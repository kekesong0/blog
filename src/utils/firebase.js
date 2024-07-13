// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-80f8a.firebaseapp.com",
    projectId: "blog-80f8a",
    storageBucket: "blog-80f8a.appspot.com",
    messagingSenderId: "441252388856",
    appId: "1:441252388856:web:212f78a3aa4456a0cc800d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
