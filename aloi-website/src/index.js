import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';



// firebase imports and setup
import {initializeApp} from 'firebase/app';

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
// 


// react-router structure
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
