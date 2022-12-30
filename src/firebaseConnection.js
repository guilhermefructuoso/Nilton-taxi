import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAd_ZD_f-mPGMlA37iOmF1AHi-GVE9sBig',
    authDomain: 'nilton-traslado.firebaseapp.com',
    projectId: 'nilton-traslado',
    storageBucket: 'nilton-traslado.appspot.com',
    messagingSenderId: '249804997426',
    appId: '1:249804997426:web:f1f9e4d4402e5e6ef88d2b',
    measurementId: 'G-0HHFELY80M',
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export { db }
