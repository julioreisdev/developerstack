import { prisma } from "../config/database";
import { IAnswer } from "../types/answerTypes";
// TODO

async function insert(data: IAnswer, id: number) {
  const result = await prisma.responses.create({
    data: { answer: data.answer, answeredBy: data.answeredBy, questionId: id },
  });
  return result;
}

const answerRepository = {
  insert,
};

export default answerRepository;
