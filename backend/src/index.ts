import express from 'express';
import TaskController from './controller/task.controller';

const app = express();
const PORT = 3000;

app.use(express.json());

app
  .route('/api/tasks/:title')
  .get(TaskController.Get)
  .patch(TaskController.Patch);

app.route('/api/tasks').post(TaskController.Post).delete(TaskController.Delete);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

// http://localhost:3000/api/tasks/Criar Frontend
