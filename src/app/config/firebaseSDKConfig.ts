import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpcHLQsu8Y0VutSGZX-_E1cVCtJ7yCVmU",
  authDomain: "links-rotarybonsventos.firebaseapp.com",
  projectId: "links-rotarybonsventos",
  storageBucket: "links-rotarybonsventos.firebasestorage.app",
  messagingSenderId: "614593663256",
  appId: "1:614593663256:web:46c5848a3cf960541cce6d",
  measurementId: "G-G418L0EF0W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
