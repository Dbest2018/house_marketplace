import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuqSgBCyoKRG_V3CwNhhuo9q6w3RjEUHQ",
  authDomain: "house-marketplace-eb93d.firebaseapp.com",
  projectId: "house-marketplace-eb93d",
  storageBucket: "house-marketplace-eb93d.appspot.com",
  messagingSenderId: "700687808269",
  appId: "1:700687808269:web:3190c31a115bc8e1aa6244",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
