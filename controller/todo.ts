import { RouterContext, Status } from "../deps.ts";
import { Todo } from "../model/todo.ts";
import TodoRepo from "../model/todoRepo.ts";

export const TodoController = () => {
	const todoRepo = new TodoRepo();
	const index = (ctx: RouterContext<"/todos">) => {
		ctx.response.status = Status.OK;
		ctx.response.type = "json";
		ctx.response.body = {
			status: Status.OK,
			data: todoRepo.all(),
		};
	};
	const find = (ctx: RouterContext<"/todos/:id">) => {
		ctx.response.type = "json";
		const todo = todoRepo.find(+ctx.params.id);
		if (!todo) {
			ctx.response.status = Status.NotFound;
			ctx.response.body = {
				status: Status.NotFound,
			};
		} else {
			ctx.response.status = Status.OK;
			ctx.response.body = {
				status: Status.OK,
				data: todo,
			};
		}
	};
	const add = async (ctx: RouterContext<"/todos">) => {
		const body = ctx.request.body({ type: "json" });
		const todo: Todo = (await body.value) as Todo;

		todoRepo.add(todo);
		ctx.response.body = {
			status: Status.OK,
		};
	};
	const remove = (ctx: RouterContext<"/todos/:id">) => {
		todoRepo.remove(+ctx.params.id);
		ctx.response.status = Status.OK;
		ctx.response.type = "json";
		ctx.response.body = {
			status: Status.OK,
		};
	};
	const done = (ctx: RouterContext<"/todos/:id">) => {
		todoRepo.done(+ctx.params.id);

		ctx.response.status = Status.OK;
		ctx.response.type = "json";
		ctx.response.body = {
			status: Status.OK,
		};
	};
	return {
		index,
		find,
		add,
		remove,
		done,
	};
};
