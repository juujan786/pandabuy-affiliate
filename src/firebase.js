import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu264eBwLlKElbQx6Ahv_dRejTJScMtgk",
  authDomain: "pandabuy-affiliate.firebaseapp.com",
  projectId: "pandabuy-affiliate",
  storageBucket: "pandabuy-affiliate.appspot.com",
  messagingSenderId: "976730597106",
  appId: "1:976730597106:web:1ac3f851982103a8e1526b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseDB = getFirestore(app);

export default firebaseDB;
