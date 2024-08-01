// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXUI4cT1yky_oIXhrZi_-In0KHs1V9Q4Y",
  authDomain: "inventory-management-sys-480be.firebaseapp.com",
  projectId: "inventory-management-sys-480be",
  storageBucket: "inventory-management-sys-480be.appspot.com",
  messagingSenderId: "418063941470",
  appId: "1:418063941470:web:fd1e8e1503b4219cee19cf",
  measurementId: "G-00LKVLP4YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}