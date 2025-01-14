// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmCO5RAkFZzDuWXqgO-NSFdG1C0tFE6HI",
  authDomain: "hekto-a9eb6.firebaseapp.com",
  projectId: "hekto-a9eb6",
  storageBucket: "hekto-a9eb6.appspot.com",
  messagingSenderId: "1029778239871",
  appId: "1:1029778239871:web:055426b7ea41c25d9aaa4a",
  measurementId: "G-EM3NJS3G3Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

export { app, auth, analytics };
