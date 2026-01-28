const questions=[
        {
            question: "Which planet in our solar system is known as the Red Planet?",
            answers: [
                { text: "Earth", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Venus", correct: false },
            ]
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Pacific Ocean", correct: true },
                { text: "Indian Ocean", correct: false },
                { text: "Arctic Ocean", correct: false },
            ]
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            answers: [
                { text: "Charles Dickens", correct: false },
                { text: "Jane Austen", correct: false },
                { text: "William Shakespeare", correct: true },
                { text: "Mark Twain", correct: false },
            ]
        },
        {
            question: "What is the capital of Japan?",
            answers: [
                { text: "Bangkok", correct: false },
                { text: "Beijing", correct: false },
                { text: "Tokyo", correct: true },
                { text: "Seoul", correct: false },
            ]
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            answers: [
                { text: "Sodium", correct: false },
                { text: "Oxygen", correct: true },
                { text: "Gold", correct: false },
                { text: "Helium", correct: false },
            ]
        },
        {
            question: "In which year did the Titanic sink?",
            answers: [
                { text: "1915", correct: false },
                { text: "1912", correct: true },
                { text: "1910", correct: false },
                { text: "1918", correct: false },
            ]
        },
        {
            question: "What is the tallest mountain in the world?",
            answers: [
                { text: "Lhotse", correct: false },
                { text: "Mount Everest", correct: true },
                { text: "Kangchenjunga", correct: false },
                { text: "K2", correct: false },
            ]
        },
        {
            question: "Who painted the Mona Lisa?",
            answers: [
                { text: "Vincent van Gogh", correct: false },
                { text: "Leonardo da Vinci", correct: true },
                { text: "Pablo Picasso", correct: false },
                { text: "Claude Monet", correct: false },
            ]
        },
        {
            question: "Which continent is the Sahara Desert located on?",
            answers: [
                { text: "South America", correct: false },
                { text: "Asia", correct: false },
                { text: "Africa", correct: true },
                { text: "Australia", correct: false },
            ]
        },
        {
            question: "What is the main ingredient in traditional guacamole?",
            answers: [
                { text: "Tomatoes", correct: false },
                { text: "Mango", correct: false },
                { text: "Peas", correct: false },
                { text: "Avocado", correct: true },
            ]
        }
    ];
    
    const questionElement=document.getElementById("question");
    const answerButton=document.getElementById("answer-btn");
    const nextButton=document.getElementById("next-btn");

    let currentQuestionIndex=0;
    let score=0;

    function startQuiz(){
     currentQuestionIndex=0;
     score=0;
     showQuestion();

    };

    function showQuestion(){
        resetState();
        let currentQuestion=questions[currentQuestionIndex];
        let questionNo=currentQuestionIndex+1;
        questionElement.innerHTML=questionNo +". "+currentQuestion.question;

        currentQuestion.answers.forEach(answer =>{
            const button=document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("btn");
            answerButton.appendChild(button); 
            if(answer.correct){
                button.dataset.correct=answer.correct;

            }

            button.addEventListener("click" ,selectAnswer);
        });
    }
    function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
    }
    function selectAnswer(e){
        let selectedBtn=e.target;
        let iscorrect=selectedBtn.dataset.correct==="true";
        if(iscorrect){
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("incorrect")
        }
        Array.from(answerButton.children).forEach(button =>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
            button.disabled=true;
        })
        nextButton.style.display="block";
       
    }
    function showScore(){
        resetState();
        questionElement.innerHTML=`You scored ${score} 0ut of ${questions.length} !`;
        nextButton.innerHTML= "Play Again";
        nextButton.style.display="block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }
    nextButton.addEventListener("click",()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }
        else{

            startQuiz();
        }
    })
    startQuiz();