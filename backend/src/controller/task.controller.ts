import { Request, Response } from "express";
import { writeFileSync, readFileSync } from "fs";
import path from "path";

const handlers = {
	Get: (req: Request, res: Response) => {
		const { params } = req;

		const task = readFileSync(
			path.resolve(__dirname, `../${params.title}.txt`)
		);

		res.send(task.toString());
	},

	Post: (req: Request, res: Response) => {
		const { body } = req;

		writeFileSync(`dist/${body.title}.txt`, JSON.stringify(body.msg));

		res.status(201);
		res.send("Task registered!");
	},

	Patch: (req: Request, res: Response) => {
		res.send("Hello World");
	},

	Delete: (req: Request, res: Response) => {
		res.send("Hello World");
	},
};

export default handlers;
