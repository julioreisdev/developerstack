import answerRepository from "../repositories/answerRepository";
import { IAnswer } from "../types/answerTypes";

// TODO
export default async function answerService(data: IAnswer, id: number) {
    const result = await answerRepository.insert(data, id)
    if (!result) {
        throw { type: "not_found" }
    }
    return 'Resposta dadicionada com sucesso!'
}