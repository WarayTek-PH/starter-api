import { Router } from "express";
import TodoController from "../controllers/TodoController";
const router = Router();

router.get("/", TodoController.index);
router.get("/:id", TodoController.show);
router.post("/", TodoController.store);
router.patch("/:id", TodoController.update);
router.put("/:id", TodoController.update);
router.delete("/:id", TodoController.destroy);

export default router;
