import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDXTOFVxF8A1gjswVYRh3_OQ48JFrZ17IM",
  authDomain: "linkedin-clone-c5d53.firebaseapp.com",
  projectId: "linkedin-clone-c5d53",
  storageBucket: "linkedin-clone-c5d53.appspot.com",
  messagingSenderId: "939041846171",
  appId: "1:939041846171:web:f0b4bb631a8a85e6a8a73e",
  measurementId: "G-HZZR9PTV5Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider=new GoogleAuthProvider()
// const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, storage };
export default db;

