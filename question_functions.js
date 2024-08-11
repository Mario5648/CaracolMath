
let SELECTED_QUESTION = null;
let SELECTED_SUBJECT = null;

function generateAlgebraOneQuestion()
{
    SELECTED_SUBJECT = 'Algebra 1'

    //get random question
    let questionIndex = Math.floor(Math.random() * ALGEBRA_ONE_QUESTIONS.length);

    SELECTED_QUESTION = ALGEBRA_ONE_QUESTIONS[questionIndex]

    renderQuestionPage();

    document.getElementById('questionText').innerHTML = SELECTED_QUESTION['question'];
    document.getElementById('answerChoices').innerHTML = ``;

    let answerIndex = 0;
    for (const answerChoice of SELECTED_QUESTION['choices'])
    { 
        document.getElementById('answerChoices').innerHTML += `<div class="answerChoiceBox" onclick="handleChoiceClick(${answerIndex})" id="question-${answerIndex}">${answerChoice}</div><br><br>`
        answerIndex += 1;
    }

    startTimer(document.getElementById('timer'));

    MathJax.typeset();

}

function generateAlgebraTwoQuestion()
{
    SELECTED_SUBJECT = 'Algebra 2'

    //get random question
    let questionIndex = Math.floor(Math.random() * ALGEBRA_TWO_QUESTIONS.length);

    SELECTED_QUESTION = ALGEBRA_TWO_QUESTIONS[questionIndex]

    renderQuestionPage();

    document.getElementById('questionText').innerHTML = SELECTED_QUESTION['question'];
    document.getElementById('answerChoices').innerHTML = ``;

    let answerIndex = 0;
    for (const answerChoice of SELECTED_QUESTION['choices'])
    { 
        document.getElementById('answerChoices').innerHTML += `<div class="answerChoiceBox" onclick="handleChoiceClick(${answerIndex})" id="question-${answerIndex}">${answerChoice}</div><br><br>`
        answerIndex += 1;
    }

    startTimer(document.getElementById('timer'));

    MathJax.typeset();

}

function generateCalculusOneQuestion()
{
    SELECTED_SUBJECT = 'Calculus 1'

    //get random question
    let questionIndex = Math.floor(Math.random() * CALCULUS_ONE_QUESTIONS.length);

    SELECTED_QUESTION = CALCULUS_ONE_QUESTIONS[questionIndex]

    renderQuestionPage();

    document.getElementById('questionText').innerHTML = SELECTED_QUESTION['question'];
    document.getElementById('answerChoices').innerHTML = ``;

    let answerIndex = 0;
    for (const answerChoice of SELECTED_QUESTION['choices'])
    { 
        document.getElementById('answerChoices').innerHTML += `<div class="answerChoiceBox" onclick="handleChoiceClick(${answerIndex})" id="question-${answerIndex}">${answerChoice}</div><br><br>`
        answerIndex += 1;
    }

    startTimer(document.getElementById('timer'));

    MathJax.typeset();
}


function correctDisableAll(selectedChoiceIndex)
{

    let questionIndex = 0;
    for(const questionChoice of SELECTED_QUESTION['choices'])
    {

        if (questionIndex != selectedChoiceIndex)
        {
            document.getElementById(`question-${questionIndex}`).onclick = "";

            if (document.getElementById(`question-${questionIndex}`).classList.contains('answerChoiceBox'))
            {
                document.getElementById(`question-${questionIndex}`).classList.remove('answerChoiceBox');
            }
            document.getElementById(`question-${questionIndex}`).classList.add('answerChoiceBoxDisabled');

        }else
        {
            document.getElementById(`question-${questionIndex}`).onclick = "";
            document.getElementById(`question-${questionIndex}`).classList.remove('answerChoiceBox');
            document.getElementById(`question-${questionIndex}`).classList.add('answerChoiceBoxCorrectDisabled');
        }

        questionIndex += 1;
    }
}


function handleChoiceClick(selectedChoiceIndex) {
    // Compare selected choice with the correct answer
    if (selectedChoiceIndex === SELECTED_QUESTION['answerIndex']) {
        correctDisableAll(selectedChoiceIndex);
        document.getElementById('explanationTitle').innerHTML = 'Explanation';
        document.getElementById('explanationText').innerHTML = SELECTED_QUESTION['explanation'];
        MathJax.typeset();
        clearInterval(interval); // Stop the timer from running
        alert('Correct!');
    } else {
        alert('Incorrect. Try again.');
        document.getElementById(`question-${selectedChoiceIndex}`).onclick = "";
        document.getElementById(`question-${selectedChoiceIndex}`).classList.remove('answerChoiceBox');
        document.getElementById(`question-${selectedChoiceIndex}`).classList.add('answerChoiceBoxDisabled');
    }
}

function regenerateQuestion()
{
    switch(SELECTED_SUBJECT)
    {
        case "Algebra 1":
            generateAlgebraOneQuestion();
            break;
        case "Algebra 2":
            generateAlgebraTwoQuestion();
            break;
        case "Calculus 1":
            generateCalculusOneQuestion();
            break;
    }
}

function renderQuestionPage()
{
    let questionPageHtml = `
        <div class="questionContainer">
            <div class="sectionSpace"></div>

            <div class="questionMenuContainer">
                <button class="generateQuestionButton" onclick="regenerateQuestion()">Regenerate Question</button>
                <div class="timerTextContainer">
                    <p class="timerTextStyle">Total Time: </p>
                    <p class="timerTextStyle" id="timer"> 00:00</p>
                </div>
            </div>
            <br>
            <br>
            <br>
            <div>
                <center><p class="questionTextStyle" id="questionText"></p></center>
            </div>
            <br>
            <br>
            <br>
            <div id="answerChoices"></div>

            <div id="explanationContainer">
                <p id="explanationTitle" class="explanationTitle"></p>
                <p class="explanationTextStyle" id="explanationText"></p>
            </div>
        </div>
    `;

    document.getElementById('mainBodyContent').innerHTML = questionPageHtml;
}