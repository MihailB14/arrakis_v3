import React from 'react'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
        
const Login = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyD1ycjD9NhR6Jw6XTDYV-LNuZ6YNDIczL0",
        authDomain: "bondsapp-3748f.firebaseapp.com",
        projectId: "bondsapp-3748f",
        storageBucket: "bondsapp-3748f.appspot.com",
        messagingSenderId: "579830957232",
        appId: "1:579830957232:web:6a67e55d7eb6f945e36775"
    };

    // Initialize Firebase
    //                  const app = initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
    function tryLogin() {
    firebase
        .auth()
        .signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("password").value)
        .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        });
        }
  return (
    <div>
    <label>Email</label>
    <input id="email" type="text" />
    <label>Password</label>
    <input id="password" type="password" />
    <button onclick={tryLogin}>Login</button>
    </div>
    


  )
}

export default Login