import express from 'express'
import http from 'http'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express()
const port = process.env.PORT || 7000

app.set('views', 'build/views')
app.set('view engine', 'ejs')

const server = http.createServer(app)

server.listen(port, () => [
  console.log("server listening on port => ", port)
])


// type TQuestion = {
//   id: number;
//   name: string;
//   text: string;
// }


// const getQuestions: string[] = async () => {
//   const res = await prisma.question.findFirst()
//   return res
// }

let questionId: number = 1


app.get('/', async (_req: any, res: any, _next: any) => {

  const data = await prisma.question.findMany({
    where: { id: questionId }
  })

  console.log(data)
  res.render('home', {
    questions: data
  })
})