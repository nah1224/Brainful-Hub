// exam.js - logic for exam.html
import { auth, db } from './firebase.js';
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

let questions = [];
let current = 0;
let score = 0;
let answers = [];
let reviewMode = 'afterExam'; // or 'afterEach'

onAuthStateChanged(auth, user => {
    if(!user) window.location.href="index.html";
});

export async function loadQuestions(){
    const stream = localStorage.getItem('stream') || 'Natural';
    const qSnap = await getDocs(query(collection(db,'exams'), where('stream','==',stream)));
    questions = qSnap.docs.map(d => d.data());
    showQuestion();
}

export function showQuestion(){
    if(current >= questions.length){ finishExam(); return; }
    const q = questions[current];
    const questionTitle = document.getElementById('questionTitle');
    const ul = document.getElementById('optionsList');
    questionTitle.innerText = q.question;
    ul.innerHTML = '';
    q.options.forEach((opt,i)=>{
        const li = document.createElement('li');
        li.innerHTML = `<label><input type="radio" name="option" value="${i}"> ${opt}</label>`;
        ul.appendChild(li);
    });
}

export function nextQuestion(){
    const opts = document.getElementsByName('option');
    let selected = -1;
    opts.forEach(o => { if(o.checked) selected = parseInt(o.value); });
    if(selected === -1){ alert("Select an option"); return; }

    answers.push(selected);
    if(selected === questions[current].answer) score++;
    current++;

    if(reviewMode === 'afterEach'){
        localStorage.setItem('questions', JSON.stringify(questions));
        localStorage.setItem('answers', JSON.stringify(answers));
    }

    showQuestion();
}

export function finishExam(){
    localStorage.setItem('questions', JSON.stringify(questions));
    localStorage.setItem('answers', JSON.stringify(answers));
    alert(`Exam finished! Your score: ${score}/${questions.length}`);
    window.location.href = "review.html";
}

// Initialize
loadQuestions();