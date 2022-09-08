import { prisma } from "../config/database";
import { IQuestion } from "../types/questionTypes";

async function insert(data: IQuestion) {
  const result = await prisma.questions.create({
    data: { askedBy: data.askedBy, question: data.question },
  });
  return result;
}

async function getAll() {
  const result = await prisma.questions.findMany()
  return result
}

const questionRepository = {
  insert,
  getAll
};

export default questionRepository;
