import { Router } from "express";
import users from "./users";
import posts from "./posts";
import todos from "./todos";
const routes = Router();
routes.use("/users", users);
routes.use("/posts", posts);
routes.use("/todos", todos);

export default routes;
