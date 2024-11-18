import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBgGvZo7laG7cJ5TjzMfVIt60oJmxq0nEY",
    authDomain: "car-wash-e5633.firebaseapp.com",
    projectId: "car-wash-e5633",
    storageBucket: "car-wash-e5633.firebasestorage.app",
    messagingSenderId: "141709780427",
    appId: "1:141709780427:web:130b4669da24589565424e"
  };


  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);