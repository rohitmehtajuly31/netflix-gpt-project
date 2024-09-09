// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLrp4I9ay6ycnDKkCsbzxQHi8TQfbqKCA",
  authDomain: "netflix-gpt-8a40a.firebaseapp.com",
  projectId: "netflix-gpt-8a40a",
  storageBucket: "netflix-gpt-8a40a.appspot.com",
  messagingSenderId: "424896094420",
  appId: "1:424896094420:web:6000c63735374c66125b41",
  measurementId: "G-7841L9MQ0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();