const questions = [
    {
        id: 1,
        question: "Who are Doc's patient's?",
        answers: ['Vegetables', 'Animals', 'Minerals', 'Toys'],
        correctAnswer: 'Toys'
    },
    {
        id: 2,
        question: "What is Chilly the Snowman always worried about?",
        answers: ["Melting", "Eating", "Being left behind", "Falling off the bed"],
        correctAnswer: 'Melting'
    },
    {
        id: 3,
        question: "What does Lambie always give people?",
        answers: ["Hugs", "Cheetos", "Wool", "High Fives"],
        correctAnswer: 'Hugs'
    },
    {
        id: 4,
        question: "Which First Lady invited Doc to the White House?",
        answers: ["Michelle Obama", "Melania Trump", "Hillary Clinton", "Laura Bush"],
        correctAnswer: 'Michelle Obama'
    },
    {
        id: 5,
        question: "What tool does Doc use to bring her toys to life?",
        answers: ["A Wrench", "A Stethoscope", "A Light Bulb", "A Hamster Wheel"],
        correctAnswer: 'A Stethoscope'
    },
    {
        id: 6,
        question: "What is the first thing that Doc checks, according the song, Time For Your Checkup?",
        answers: ["Ears", "Eyes", "Heartbeat", "Height"],
        correctAnswer: 'Ears'
    },
    {
        id: 7,
        question: "Who brings over the 'Big Book of Boo Boos' to record diagnoses?",
        answers: ["Lambie", "Stuffy", "Hallie", "Chilly"],
        correctAnswer: 'Hallie'
    },
    {
        id: 8,
        question: "What type of animal is Stuffy?",
        answers: ["Dragon", "Dinosaur", "Sheep", "Dog"],
        correctAnswer: 'Dragon'
    },
    {
        id: 9,
        question: "Who are Doc's neighbors?",
        answers: ["Emmie and Alma", "Ernie and Bert", "Ricardo and Richie", "Felix and Oscar"],
        correctAnswer: 'Emmie and Alma'
    },
    {
        id: 10,
        question: "What is Doc's real name?",
        answers: ["Dottie", "Sarah", "Debbie", "Michelle"],
        correctAnswer: 'Dottie'
    },
]

const resetGame = () => {
    $("#game-area").empty();
    $.each(questions, (index, question) => buildQuestion(index, question))
    $("#correct").text(0);
    $("#incorrect").text(0);

};

const randomizeArray = (array) => {};

const buildQuestion = (index, question) => {
    
    $question = $('<fieldset>');
    $legend = $('<legend>')
    $legend.append(`${index + 1}. ${question.question}`)
    $question.append($legend);

    question.answers.forEach((answer) => {
        const $div = $('<div>');

        const $input = $('<input>');
        $input.attr('type', 'radio');
        $input.attr('name', `${question.id}`);
        $input.attr('id', answer);
        $input.attr('value', answer);
        $input.append(answer);

        const $label = $('<label>');
        $label.attr('for', answer);
        $label.text(answer);

        $div.append($input);
        $div.append($label);

        $question.append($div)
    })

    $("#game-area").append($question)   

};

const scoreQuestions = () => {
    let numberCorrectAnswers = 0;

    $("input:checked").each( (index, input) => {
        const value = input.value;
        const activeQuestion = questions.filter(question => question.id === +input.name)[0];

        if (value === activeQuestion.correctAnswer) {
            numberCorrectAnswers++
        }
    });  
    
    let numberIncorrectAnswers = questions.length - numberCorrectAnswers;

    $("#correct").text(numberCorrectAnswers);
    $("#incorrect").text(numberIncorrectAnswers);
};


$(document).ready(() => {
    $.each(questions, (index, question) => buildQuestion(index, question))

    $('#score').on("click", scoreQuestions)
    $('#reset').on("click", resetGame)
})