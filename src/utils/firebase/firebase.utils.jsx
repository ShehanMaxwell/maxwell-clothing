import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBq9GwxtXBvq4F61FsevooYIjGH6T7R9hk',
  authDomain: 'maxwell-clothing-db.firebaseapp.com',
  projectId: 'maxwell-clothing-db',
  storageBucket: 'maxwell-clothing-db.appspot.com',
  messagingSenderId: '1052266775175',
  appId: '1:1052266775175:web:a5ae33b716d7d15335ee22',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
