import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyBxQm-4f88L4pbjeWI-QzqbukNQYcBIGWU",
  authDomain: "final-project-3cb65.firebaseapp.com",
  projectId: "final-project-3cb65",
  storageBucket: "final-project-3cb65.firebasestorage.app",
  messagingSenderId: "84353983285",
  appId: "1:84353983285:web:e279263c3c19cbeda9227c",
  measurementId: "G-SM2QZTXEZF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Make sure this exists
export default app;