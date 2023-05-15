import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { hpApi } from "./AxiosService.js"

class QuestionsService {
  async getQuestionData() {
    // YOU DO THIS PRETTY MUCH THE SAME WAY ALL THE DAYS....
    const response = await hpApi.get('api.php?amount=10&category=23&difficulty=easy&type=multiple')
    console.log(response.data)
    // ['🐟', '🐠', '🐡', '🦈'].map(f => new Sushi(f))
    // ['🍣', '🍣', '🍣', '🍣']
    appState.questions = response.data.results.map(q => new Question(q))


  }

}



export const questionsService = new QuestionsService()




// api.php?amount=10&category=23&difficulty=easy&type=multiple