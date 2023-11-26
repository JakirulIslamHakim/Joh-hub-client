import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDurH5TWrI5BF6LlyzATANUVc1XmJOxaaE",
  authDomain: "job-hub-6e265.firebaseapp.com",
  projectId: "job-hub-6e265",
  storageBucket: "job-hub-6e265.appspot.com",
  messagingSenderId: "577862992128",
  appId: "1:577862992128:web:babc8605c04990a562f3e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
