const firebaseConfig = {
    apiKey: "AIzaSyA6mDjGHTs6amVk4QG8AhIiM3lS4pNUz28",
    authDomain: "coffee-management-7107b.firebaseapp.com",
    projectId: "coffee-management-7107b",
    storageBucket: "coffee-management-7107b.firebasestorage.app",
    messagingSenderId: "872905255503",
    appId: "1:872905255503:web:650780a18dbec8f83c583a",
    measurementId: "G-YG907LMNGB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize User Authenitcation
const auth = firebase.auth();

// Initialize Database
const db = firebase.firestore();

// Initialize Smaller Database (teacher said so)
const storage = firebase.storage();


console.log(firebase.app().name);