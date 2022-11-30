import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjjZmXqRY1pkqVAyWXsqvby2J8_3FJonQ",
  authDomain: "chitchat-by-shubham.firebaseapp.com",
  projectId: "chitchat-by-shubham",
  storageBucket: "chitchat-by-shubham.appspot.com",
  messagingSenderId: "803174827575",
  appId: "1:803174827575:web:bc5f48e197f56a225da1b2",
};

export const app = initializeApp(firebaseConfig);
