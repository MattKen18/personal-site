import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDoc, doc} from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "personal-site-7ae39.firebaseapp.com",
  projectId: "personal-site-7ae39",
  storageBucket: "personal-site-7ae39.appspot.com",
  messagingSenderId: "209707721833",
  appId: "1:209707721833:web:1fccc00b5273f5c2d6eef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addFeedback(body = '') {
  const collection = collection(db, "feedback");

  try {
    const docRef = await addDoc(collection, {
      body: body,      
    });
    } catch (e) {
      return e;
  }
}

export async function addLike() {
  const likesRef = doc(db, "feedback", "likes");
  const likesSnap = await getDoc(likesRef);
  try {
    const docRef = await addDoc(collection, {
      likes: likesSnap.data().likes + 1,      
    });
    console.log(docRef.data());
    } catch (e) {
      console.log(e);
      return e;
  }
}