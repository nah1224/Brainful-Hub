// admin.js - logic for admin.html
import { auth, db } from './firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Admin login
export async function adminLogin(){
    const email = document.getElementById("adminEmail").value;
    const pass = document.getElementById("adminPass").value;
    try {
        const userCred = await signInWithEmailAndPassword(auth,email,pass);
        const userDoc = await getDoc(doc(db,"users",userCred.user.uid));
        if(userDoc.exists() && userDoc.data().role === 'admin'){
            document.getElementById("adminPanel").style.display="block";
        } else {
            alert("Not authorized"); 
            await signOut(auth);
        }
    } catch(err){
        document.getElementById("adminMsg").innerText = err.message;
    }
}

// Add student
export async function addStudent(){
    const name = document.getElementById("stuName").value;
    const email = document.getElementById("stuEmail").value;
    const stream = document.getElementById("stuStream").value;
    const password = Math.random().toString(36).slice(-8);
    try{
        const userCred = await createUserWithEmailAndPassword(auth,email,password);
        await setDoc(doc(db,"users",userCred.user.uid),{
            name,email,stream,approved:true,role:'student'
        });
        alert(`Student added. Temporary password: ${password}`);
    } catch(err){
        alert(err.message);
    }
}

// Logout
export async function logout(){
    await signOut(auth);
    window.location.href="index.html";
}

// Redirect to create exam page
export function createExam(){
    window.location.href="createExam.html";
}