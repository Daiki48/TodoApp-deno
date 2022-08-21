import { Router } from "../deps.ts";
import { TodoController } from "../controller/todo.ts";

const router = new Router();
const todoController = TodoController();

router
	.get("/todos", todoController.index)
	.get("/todos/:id", todoController.find)
	.post("/todos", todoController.add)
	.delete("/todos/:id", todoController.remove)
	.patch("/todos/:id", todoController.done);

export default router;
