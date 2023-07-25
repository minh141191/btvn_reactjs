// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBa43BFvJzc6uFp-Xoek50SommfSl571BE",
    authDomain: "api-firebase-cd378.firebaseapp.com",
    projectId: "api-firebase-cd378",
    storageBucket: "api-firebase-cd378.appspot.com",
    messagingSenderId: "807329722640",
    appId: "1:807329722640:web:d2df3ae43afc2cc3613595"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);