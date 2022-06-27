import express from 'express';
import TaskController from './controller/task.controller';

const app = express();
const PORT = 3000;

app.use(express.json());

app.route('/api/tasks/:title').get(TaskController.Get);

app
  .route('/api/tasks')
  .post(TaskController.Post)
  .patch(TaskController.Patch)
  .delete(TaskController.Delete);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

// http://localhost:3000/api/tasks/Criar Frontend

// GET: Pegar informação específica; Listar informações
// POST: Criação;
// PUT: Atualizar TODA a entidade;
// DELETE: Delete UMA informação;
// PATCH: Atualizar entidade parcialmente;

// tabela Usuario {
//   id, nome, sobrenome, idade, profissão
// }

// HTTP PUT Usuario 1 {
//   id: 2,
//   nome: fulano
//   sobrenome: siclano
//   idade: 18
//   profissão: agiota
// }

// HTTP PATCH Usuario 1 {
//   nome: fulano
// }

// HTTP PATCH Usuario 1 {
//   idade: 20
// }
