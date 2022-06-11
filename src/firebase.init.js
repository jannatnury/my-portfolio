import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxyI4Lpg5spEpfpz9Z6D3xIbSye7c8b4g",
  authDomain: "portfolio-nury.firebaseapp.com",
  projectId: "portfolio-nury",
  storageBucket: "portfolio-nury.appspot.com",
  messagingSenderId: "747896991129",
  appId: "1:747896991129:web:52af27c5782cb433bfb708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;