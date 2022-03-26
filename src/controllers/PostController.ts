import { NextFunction, Request, Response } from "express";
import prisma from "../lib/prisma";

class PostController {
  static index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const posts = await prisma.post.findMany();
      res.status(200).send(posts);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  static show = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const post = await prisma.post.findUnique({
        where: {
          id,
        },
      });
      res.status(200).send(post);
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  };

  static store = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, body } = req.body;
      const post = await prisma.post.create({
        data: {
          title,
          body,
        },
      });

      res.status(201).send(post);
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  };

  static update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const { title, body } = req.body;
      await prisma.post.update({
        where: {
          id,
        },
        data: {
          title,
          body,
        },
      });
      res.status(200).send("Post Updated");
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  };

  static destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await prisma.post.delete({
        where: {
          id,
        },
      });
      res.status(200).send("Post deleted");
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  };
}

export default PostController;
