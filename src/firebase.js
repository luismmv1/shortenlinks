import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "YourApiKey",
  authDomain: "YourAuthDomain.firebaseapp.com",
  projectId: "YourProjectID",
  storageBucket: "YourStorageBucket.firebasestorage.app",
  messagingSenderId: "372910997244",
  appId: "YourApoID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
