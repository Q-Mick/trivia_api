export class Question {
  constructor(data) {
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
    this.answers = [...data.incorrect_answers, data.correct_answer]
    this.answers.sort(() => Math.random() - 0.5)
    this.answers.sort(() => Math.random() - 0.5)
    this.answers.sort(() => Math.random() - 0.5)
  }

  get QuestionTemplate() {
    return /*html*/ `<p class="fs-1 fw-bold elevation-5">${this.question}</p>`
  }
  get AnswersTemplate() {
    return /*html*/ `
  <div id="a1" class="col-6 elevation-5">
  <p onclick="app.questionsController.checkAnswer('${this.answers[0]}')">${this.answers[0]}</p>
  </div>
  <div id="a2" class="col-6 elevation-5">
  <p onclick="app.questionsController.checkAnswer('${this.answers[1]}')">${this.answers[1]}</p>
  </div>
  <div id="a3" class="col-6 elevation-5">
  <p onclick="app.questionsController.checkAnswer('${this.answers[2]}')">${this.answers[2]}</p>
  </div>
  <div id="a4" class="col-6 elevation-5">
  <p onclick="app.questionsController.checkAnswer('${this.answers[3]}')">${this.answers[3]}</p>
  </div>
    `
  }
}
