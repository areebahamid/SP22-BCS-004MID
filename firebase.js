import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVbBbE7exs69pkWS65spSVqmkDGceF_os",
  authDomain: "sp22-bcs-004.firebaseapp.com",
  projectId: "sp22-bcs-004",
  storageBucket: "sp22-bcs-004.appspot.com",
  messagingSenderId: "562567155992",
  appId: "1:562567155992:web:ab5692f84d83c9aa084e6d",
  measurementId: "G-K6VQJD216Q"
};

const app = initializeApp(firebaseConfig);

//const auth = getAuth(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export {app,auth};