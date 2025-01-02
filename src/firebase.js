import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBA3D7rB15bGmBur-CdpMZ4KpTSxEwklaM",
  authDomain: "reactfb9router6vite04firestore.firebaseapp.com",
  projectId: "reactfb9router6vite04firestore",
  storageBucket: "reactfb9router6vite04firestore.firebasestorage.app",
  messagingSenderId: "372910997244",
  appId: "1:372910997244:web:12dad36df6f884706e6179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
