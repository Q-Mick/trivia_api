import { appState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawQuestions() {
  // console.log("drawing questions", appState.questions);
  // let template = `<p class="fs-1 fw-bold elevation-5">${appState.questions[appState.question].question}</p>`
  // console.log(appState.questions[0].QuestionTemplate);
  if (appState.question == 10) {
    if (appState.question == 10) {
      alert(
        "You got " +
          appState.correct +
          " correct and " +
          appState.incorrect +
          " incorrect. Please refresh to get new questions"
      )
      appState.correct = 0
      appState.incorrect = 0
    }
    return
  }
  console.log(appState.questions[appState.question])
  setHTML("question", appState.questions[appState.question].QuestionTemplate)
  setHTML("answers", appState.questions[appState.question].AnswersTemplate)
  // console.log(QuestionTemplate);
  // setHTML('answers',this.questions.QuestionTemplate)
  // setHTML('question', appState.questions[0].question)
}
export class QuestionsController {
  constructor() {
    // console.log("its working");
    this.getQuestionData()
    appState.on("questions", _drawQuestions)
    // appState.on('question', _drawQuestions)
  }

  async getQuestionData() {
    try {
      await questionsService.getQuestionData()
    } catch (error) {
      Pop.error(error)
    }
  }

  checkAnswer(answer) {
    
    console.log(appState.question);
    console.log(answer);
    // console.log(appState.questions[appState.question].correct_answer);
    if (appState.questions[appState.question].correct_answer == answer) {
      Pop.toast("Correct!")

      appState.correct++
      
    } else {
      Pop.toast("wrong answer")

      appState.incorrect++
    }
    
    appState.question++
    appState.emit("questions")
    
    
  }
}
