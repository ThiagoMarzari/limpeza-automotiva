import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    //adicionar aqui sua chave de api
  };


  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
