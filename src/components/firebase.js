import {initializeApp} from 'firebase/app'
import {getAnalytics} from 'firebase/analytics'
import {getAuth, GoogleAuthProvider, onAuthStateChanged} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCdSrydhGJfLK_lkt2HPL9QmtkSkDJEzUQ",
    authDomain: "city-transit-6ef7b.firebaseapp.com",
    projectId: "city-transit-6ef7b",
    storageBucket: "city-transit-6ef7b.appspot.com",
    messagingSenderId: "330119263332",
    appId: "1:330119263332:web:55f44f5be6ba7038921b71",
    measurementId: "G-Q1NLJQB7DZ"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()

export const getLoginState = async () => {
    await onAuthStateChanged(auth, (user) => {
        if (user) {                            
          return true
        } else {
          return false
        }
      });
}