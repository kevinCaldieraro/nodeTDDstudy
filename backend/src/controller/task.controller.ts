import { Request, Response } from 'express';
import { writeFileSync, readFileSync, unlinkSync } from 'fs';
import path from 'path';

const handlers = {
  Get: (req: Request, res: Response) => {
    const { params } = req;

    const task = readFileSync(
      path.resolve(__dirname, `../${params.title}.txt`)
    );

    res.status(200);
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

    writeFileSync(`dist/${params.title}.txt`, JSON.stringify(body.newMsg));

    res.status(200);
    res.send('Content updated!');
  },

  Delete: (req: Request, res: Response) => {
    const { body } = req;

    unlinkSync(`dist/${body.file}.txt`);
    res.status(200);
    res.send('Task deleted!');
  }
};

export default handlers;
