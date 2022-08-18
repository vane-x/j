import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId:    process.env.REACT_APP_PROJECTID,
  storageBucket:     process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:   process.env.REACT_APP_MESSAGINGSENDERID,
  appId:     process.env.REACT_APP_APPID,
}




const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 
reportWebVitals();
