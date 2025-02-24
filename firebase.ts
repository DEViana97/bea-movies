import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAP1NT24rzG_mwCsG8RHYnShwMvsRd2m94",
  authDomain: "bea-triz.firebaseapp.com",
  projectId: "bea-triz",
  storageBucket: "rotas-de-lixo.appspot.com",
  messagingSenderId: "230320614663",
  appId: "1:230320614663:web:1a0a25f3af1d1614d829a2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);