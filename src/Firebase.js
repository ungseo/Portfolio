// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_KEY,
  authDomain: process.env.REACT_APP_FB_APP_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: "G-DJ5GZDDLX1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export const WriteDB = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "GuestBook"), {
      name: data.name,
      content: data.content,
      password: data.password,
      date: data.date,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.log(error);
  }
};

export const ReadDB = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "GuestBook"));
    return querySnapshot;
  } catch (error) {
    console.error("Error reading from database:", error);
  }
};

export const DeleteDB = async (data) => {
  try {
    await deleteDoc(doc(db, "GuestBook", data));
  } catch (error) {
    console.log(error);
  }
};
