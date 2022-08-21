import { Application, Router } from "./deps.ts";
import todos from "./route/todo.ts";

const app = new Application();
const router = new Router();

app.use(async (ctx, next) => {
	await next();
	console.log(`${ctx.request.method}: ${ctx.request.url.pathname}`);
});

router.get("/", (ctx) => {
	ctx.response.body = "Hello TodoApp with deno!";
});

app.use(router.routes()).use(todos.routes());

await app.listen({ port: 8080 });
