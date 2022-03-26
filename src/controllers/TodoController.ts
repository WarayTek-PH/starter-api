import { NextFunction, Request, Response } from "express";
import prisma from "../lib/prisma";

class TodoController {
  static index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todos = await prisma.todo.findMany();
      res.status(200).send(todos);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  static show = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const todo = await prisma.todo.findUnique({
        where: {
          id,
        },
      });
      res.status(200).send(todo);
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  };

  static store = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, body } = req.body;
      const todo = await prisma.todo.create({
        data: {
          body,
        },
      });

      res.status(201).send(todo);
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  };

  static update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const { title, body } = req.body;
      const updatetodo = await prisma.todo.update({
        where: {
          id,
        },
        data: {
          body,
        },
      });
      res.status(200).send("Todo Updated");
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  };

  static destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const deleteUser = await prisma.todo.delete({
        where: {
          id,
        },
      });
      res.status(200).send("Todo deleted");
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  };
}

export default TodoController;
