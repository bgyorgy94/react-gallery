import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxnk8g3FmjVgnlQ_TtS0bE-5Hd7LdEmvw",
  authDomain: "penztar-11ecc.firebaseapp.com",
  databaseURL: "https://penztar-11ecc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "penztar-11ecc",
  storageBucket: "penztar-11ecc.appspot.com",
  messagingSenderId: "169109766821",
  appId: "1:169109766821:web:44404845dee3e5ed8e034c"
};

export const app = initializeApp(firebaseConfig);