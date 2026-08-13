
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-agent-2fa4c.firebaseapp.com",
  projectId: "ai-interview-agent-2fa4c",
  storageBucket: "ai-interview-agent-2fa4c.firebasestorage.app",
  messagingSenderId: "833698174880",
  appId: "1:833698174880:web:ef2a750bb8db61c2b4b6c5"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const provider= new GoogleAuthProvider()

export {auth,provider} 