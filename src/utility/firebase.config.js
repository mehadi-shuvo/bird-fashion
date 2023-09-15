import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBMyU9Zqc-WarIGMO8amz0tcVK2IbTWaTc",

  authDomain: "test-37b8c.firebaseapp.com",

  projectId: "test-37b8c",

  storageBucket: "test-37b8c.appspot.com",

  messagingSenderId: "502779731682",

  appId: "1:502779731682:web:a841334a030ebb817348bb"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
