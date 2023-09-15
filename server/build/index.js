"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const port = process.env.PORT || 7000;
app.set('views', 'build/views');
app.set('view engine', 'ejs');
const server = http_1.default.createServer(app);
server.listen(port, () => [
    console.log("server listening on port => ", port)
]);
// type TQuestion = {
//   id: number;
//   name: string;
//   text: string;
// }
// const getQuestions: string[] = async () => {
//   const res = await prisma.question.findFirst()
//   return res
// }
let questionId = 1;
app.get('/', (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma.question.findMany({
        where: { id: questionId }
    });
    console.log(data);
    res.render('home', {
        questions: data
    });
}));
