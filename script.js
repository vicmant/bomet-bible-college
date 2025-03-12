import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    console.log("Firebase initialized:", app);
    const auth = getAuth();
    const db = getFirestore(app);

    // Google Login
    document.getElementById("googleLogin").addEventListener("click", () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            console.log("User signed in:", result.user);
            document.getElementById("userDisplay").innerText = `Welcome, ${result.user.displayName}`;
        }).catch((error) => {
            console.error("Login Error:", error);
        });
    });

    // Facebook Login
    document.getElementById("facebookLogin").addEventListener("click", () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            console.log("User signed in:", result.user);
            document.getElementById("userDisplay").innerText = `Welcome, ${result.user.displayName}`;
        }).catch((error) => {
            console.error("Login Error:", error);
        });
    });

    // Logout
    document.getElementById("logout").addEventListener("click", () => {
        signOut(auth).then(() => {
            document.getEl
