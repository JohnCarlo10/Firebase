// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXe4oiHgrkRZFMIFVTDQ__0jYZyrvjsdE",
  authDomain: "expensetrack-49379.firebaseapp.com",
  projectId: "expensetrack-49379",
  storageBucket: "expensetrack-49379.appspot.com",
  messagingSenderId: "591555731918",
  appId: "1:591555731918:web:075b446925d621a2644b9f",
  measurementId: "G-YJQJJ8K5GE"
};

initializeApp(firebaseConfig);

const db = getFirestore();
export default db