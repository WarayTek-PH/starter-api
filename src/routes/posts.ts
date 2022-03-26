import { Router } from "express";
import PostController from "../controllers/PostController";
const router = Router();

router.get("/", PostController.index);
router.get("/:id", PostController.show);
router.post("/", PostController.store);
router.patch("/:id", PostController.update);
router.put("/:id", PostController.update);
router.delete("/:id", PostController.destroy);

export default router;
