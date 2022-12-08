const newData = [
    {
        question:'Highest Folllower on Instagram',
        a:'Christiano Ronaldo',
        b:'Virat Kohli',
        c:'Lionel Messi',
        d:'Selena Gomez',
        answer:'a'
    },
    {
        question:'Who is the Prime Minister Of India',
        a:'Rahul Gandhi',
        b:'Amit Shah',
        c:'Narendra Modi',
        d:'Mamta Banerjee',
        answer:'c'
    },
    {
        question:'Which is the Most Popular prigramming Language',
        a:'Python',
        b:'Java',
        c:'C++',
        d:'JavaScript',
        answer:'b'
    },
    {
        question:'National Animal of India',
        a:'Lion',
        b:'Cow',
        c:'Cat',
        d:'Tiger',
        answer:'d'
    },
    {
        question:'Hero Of Bahubali',
        a:'Allu Arjun',
        b:'Ram charan',
        c:'Prabhas',
        d:'Jr. Ntr',
        answer:'c'
    }
]

const text_a = document.getElementById("text-a")
const text_b = document.getElementById("text-b")
const text_c = document.getElementById("text-c")
const text_d = document.getElementById("text-d")
const question_el = document.querySelector("#question");
const btn = document.querySelector('button');
const answer_els = document.querySelectorAll('.answer');
const body = document.body;
let currentQuiz = 0;
let score = 0;
function loadQuiz(){
    deselctAnswer();
    const currentQuizQuestion = newData[currentQuiz]
    question_el.innerHTML=currentQuizQuestion.question;
    text_a.innerHTML = currentQuizQuestion.a;
    text_b.innerHTML = currentQuizQuestion.b;
    text_c.innerHTML = currentQuizQuestion.c;
    text_d.innerHTML = currentQuizQuestion.d;
}

function getSelected(){
    let answer = undefined;
    answer_els.forEach(answer_el=>{
        if(answer_el.checked){
            answer = answer_el.id
        }
    });
    return answer;
}

function deselctAnswer(){
    answer_els.forEach(answer_el=>{
        answer_el.checked = false;
    });
}

loadQuiz();
btn.addEventListener('click',()=>{
    const answer = getSelected();
    if(answer){
        if(answer === newData[currentQuiz].answer){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<newData.length){
            loadQuiz();
        }
        else{
            body.innerHTML = `<h1>Your Score Is ${score} out of ${newData.length}</h1>`
        }
    }
})