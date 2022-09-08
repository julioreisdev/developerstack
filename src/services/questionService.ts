import questionRepository from "../repositories/questionRepository";
import { IQuestion } from "../types/questionTypes";

// TODO
export async function addQuestionService(data: IQuestion) {
  const result = await questionRepository.insert(data);
  if (!result) {
    throw {type: "unauthorized"}
  }
  return "Questão adicionada com sucesso!";
}

export async function allQuestions() {
  const result = await questionRepository.getAll()
  return {questions: result}
}