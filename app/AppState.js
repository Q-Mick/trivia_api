import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", [Value])
  question = 0
  correct = 0
  incorrect = 0
  questions = [
    {
          category: "Entertainment: Video Games",
          type: "multiple",
          difficulty: "medium",
          question: "What was the main currency in Club Penguin?",
          correct_answer: "Coins",
          incorrect_answers: ["Stamps", "Tickets", "Gems"],
    },
]}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  },
})
