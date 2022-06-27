import { Request, Response } from 'express';
import { writeFileSync, readFileSync } from 'fs';
import path from 'path';

const handlers = {
  Get: (req: Request, res: Response) => {
    const { params } = req;

    const task = readFileSync(
      path.resolve(__dirname, `../${params.title}.txt`)
    );

    res.status(204);
    res.send(task.toString());
  },

  Post: (req: Request, res: Response) => {
    const { body } = req;

    writeFileSync(`dist/${body.title}.txt`, JSON.stringify(body.msg));

    res.status(201);
    res.send('Task registered!');
  },

  Patch: (req: Request, res: Response) => {
    const { params } = req;
    const { body } = req;

    const task = readFileSync(
      path.resolve(__dirname, `../${params.title}.txt`)
    );

    const updateContent = task.toString().replace(body.title, body.msg);

    writeFileSync(`dist/${params.title}.txt`, JSON.stringify(updateContent));

    res.status(204);
    res.send('Content updated!');
  },

  Delete: (req: Request, res: Response) => {
    res.send('Hello World');
  }
};

export default handlers;
