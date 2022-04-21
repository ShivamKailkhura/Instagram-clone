// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4RVo_B-3zoJIbruE-Ljcqp7kk0yGAcNE',
  authDomain: 'insta-fri.firebaseapp.com',
  projectId: 'insta-fri',
  storageBucket: 'insta-fri.appspot.com',
  messagingSenderId: '34524386083',
  appId: '1:34524386083:web:310a7f29c94fef81ebf296',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
