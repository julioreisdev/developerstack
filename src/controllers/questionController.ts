import { Request, Response } from 'express';
import answerService from '../services/answerService';
import {addQuestionService, allQuestions} from '../services/questionService';
import { IAnswer } from '../types/answerTypes';
import { IQuestion } from '../types/questionTypes';

export async function createQuestion(req: Request, res: Response) {
  // TODO
  const data: IQuestion = res.locals.body
  const result = await addQuestionService(data)
  res.status(201).send(result)
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
  const id: number = Number(req.params.id)
  const data: IAnswer = res.locals.body
  try {
    const result = await answerService(data, id)
  res.status(201).send(result)
  } catch (error: any) {
    if (error.type === "not_found") res.sendStatus(404) 
    res.sendStatus(500)
  }
  
}

export async function get(req: Request, res: Response) {
  // TODO
  const result = await allQuestions()
  res.send(result)
}

export async function getById(req: Request, res: Response) {
  // TODO
  // Faltam 6 minutos, vou criar o repo pra entregar a atividade
}
