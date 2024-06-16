/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBtnqYC96AJzPlOy5i8Zu3fDiMoBs6rGC0',
  authDomain: 'capstoneprojek.firebaseapp.com',
  projectId: 'capstoneprojek',
  storageBucket: 'capstoneprojek.appspot.com',
  messagingSenderId: '673736124885',
  appId: '1:673736124885:web:d219eb8690b14f0263755c',
  measurementId: 'G-QFW2VFK8E8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app);
export const API_URL = 'https://backend-pustaka-capstone.vercel.app';
