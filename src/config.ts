import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDTNzUOXR88_l_tSNG-GgixTkJFoeqt7Y",
  authDomain: "stufin-d35b6.firebaseapp.com",
  projectId: "stufin-d35b6",
  storageBucket: "stufin-d35b6.appspot.com",
  messagingSenderId: "618618542342",
  appId: "1:618618542342:web:db25312e38611d05682687",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
