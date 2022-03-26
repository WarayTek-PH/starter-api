import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
const app = express();
import routes from "./routes";
console.log(routes.length);
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use("/", routes);
app.listen(3001, () =>
  console.log("🚀 Server ready at: http://localhost:3001")
);
