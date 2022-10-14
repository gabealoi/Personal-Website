// firebase imports and setup
import {initializeApp} from 'firebase/app';

// want the firestore for the storage imports
// import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

// define firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyBBOUvDpvXmc6ZhbnBX6S9Ixdhe4OMGk9Y",
  authDomain: "personal-webpage-9f5ab.firebaseapp.com",
  projectId: "personal-webpage-9f5ab",
  storageBucket: "personal-webpage-9f5ab.appspot.com",
  messagingSenderId: "450343653561",
  appId: "1:450343653561:web:c430026a0add22ac440b68",
  measurementId: "G-MNF1F40WND"
};

// intialize firebaseConfig
const app = initializeApp(firebaseConfig);

// initialize fireStore, exported to be of use in multiple files within the project scope
// export const db = getFirestore(app);
export const storage = getStorage(app);
