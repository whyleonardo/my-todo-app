import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'todo-leoapp.firebaseapp.com',
  projectId: 'todo-leoapp',
  storageBucket: 'todo-leoapp.appspot.com',
  messagingSenderId: '635312358214',
  appId: import.meta.env.VITE_APP_ID
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
