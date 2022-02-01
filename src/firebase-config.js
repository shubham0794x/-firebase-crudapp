import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDuRWEhVWErVncQ-PZasy1Zl_sLyMiLCdg",
    authDomain: "fir-crud-d74ee.firebaseapp.com",
    projectId: "fir-crud-d74ee",
    storageBucket: "fir-crud-d74ee.appspot.com",
    messagingSenderId: "162283752508",
    appId: "1:162283752508:web:c494f7e34e1c4a9c8c4739",
    measurementId: "G-NQ1X8S2WMY"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
