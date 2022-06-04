//Logan Thompson

const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer
} = require ('/p4-module.js');

const fastify = require("fastify")();
const listenIP = "localhost";
const listenPort = 8080;

// Start server and listen to requests using Fastify
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
  console.log(err);
  process.exit(1);
  }
  console.log(`Server listening on ${address}`);
  });

// Get route and JSON/object reply
fastify.get("/cit/question", function (request, reply) {
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send({
  "error": "",
  "statusCode": 200,
  "questions" : getQuestions(),
 });
});

fastify.get("/cit/answer", function (request, reply) {
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send({
  "error": "",
  "statusCode": 200,
  "answers" : getAnswers(),
  });
});

fastify.get("/cit/questionanswer", function (request, reply) {
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send({
  "error": "",
  "statusCode": 200,
  "questions_answers" : getQuestionsAnswers(),
  });
});

fastify.get("/cit/question/:number", function (request, reply) {
const {number} = request.params;
let response = request.params.number;
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send({
  "error": "",
  "statusCode": 200,
  "question" : getQuestion(response),
  });
});

fastify.get("/cit/answer/:number", function (request, reply) {
const {number} = request.params;
let response = request.params.number;
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send({
  "error": "",
  "statusCode": 200,
  "answer" : getAnswer(response),
  });
});

fastify.get("/cit/questionanswer/:number", function (request, reply) {
const {number} = request.params;
let response = request.params.number;
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send({
  "error": "",
  "statusCode": 200,
  "question_answer" : getQuestionAnswer(response),
  });
});

fastify.get("*", function (request, reply) {
reply
.code(404)
.header("Content-Type", "application/json; charset=utf-8")
.send({
  "error": "Route not found",
  "statusCode": 404
  });
});