//Logan Thompson

const {
  data
} = require('./p4-data.js');

function getQuestions(){
  const questionsArray=data.map((data)=>data.question);
  return questionsArray;
}

function getAnswers(){
  const answersArray=data.map((data)=>data.answer);
  return answersArray;
}

function getQuestionsAnswers(){
  const getQuestionAnswersCopy = JSON.parse(JSON.stringify(data));
  return getQuestionAnswersCopy;
}

function getQuestion(number = ""){
  let numberInt = parseInt(number);
  if  (numberInt<1) {
      const questionData = {
          qestion: "",
          number: "",
          error: "Question number must be >= 1"
      };
      return questionData;
  }
  else if (numberInt>getQuestions().length) {
      const questionData = {
          question: "",
          number: "",
          error: "Question number must be less than number of questions ("+getQuestions().length+")"
      };
      return questionData;
  }
  else if (number == ""){
      const questionData = {
          question: "",
          number: "",
          error: "Question number must be an integer"
      };
      return questionData;
  }
  else{
  const questionData = {
      question: getQuestions()[numberInt-1],
      number: parseInt(number),
      error: ""
  };
  return questionData;
}
}

function getAnswer(number = ""){
  let numberInt = parseInt(number);
  if  (numberInt<1) {
      const answerData = {
          answer: "",
          number: "",
          error: "Answer number must be >= 1"
      };
      return answerData;
  }
  else if (numberInt>getAnswers().length) {
      const answerData = {
          answer: "",
          number: "",
          error: "Answer number must be less than number of answers ("+getAnswers().length+")"
      };
      return answerData;
  }
  else if (number == ""){
      const answerData = {
          answer: "",
          number: "",
          error: "Answer number must be an integer"
      };
      return answerData;
  }
  else{
      const answerData = {
          answer: getAnswers()[numberInt-1],
          number: numberInt,
          error: ""
      };
      return answerData;
}
}

function getQuestionAnswer(number = ""){
  let numberInt = parseInt(number);
  if  (numberInt<1) {
      const questionAnswerData = {
          qestion: "",
          answer: "",
          number: "",
          error: "Question number must be >= 1"
      };
      return questionAnswerData;
  }
  else if (numberInt>getQuestions().length) {
      const questionAnswerData = {
          question: "",
          answer: "",
          number: "",
          error: "Question number must be less than number of questions ("+getQuestions().length+")"
      };
      return questionAnswerData;
  }
  else if (number == ""){
      const questionAnswerData = {
          question: "",
          answer: "",
          number: "",
          error: "Question number must be an integer"
      };
      return questionAnswerData;
  }
  else{
  const questionAnswerData = {
      question: getQuestions()[numberInt-1],
      answer: getAnswers()[numberInt-1],
      number: parseInt(number),
      error: ""
  };
  return questionAnswerData;
}
}

/*****************************
Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = true;
const testGetAs = true;
const testGetQsAs = true;
const testGetQ = true;
const testGetA = true;
const testGetQA = true;
const testAdd = false;      // Extra credit
const testUpdate = false;   // Extra credit
const testDelete = false;   // Extra credit

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() },      // Extra credit: +1
    { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() },        // Extra credit: +1
    { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
  );
}

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer
};