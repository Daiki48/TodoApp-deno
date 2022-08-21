# TodoApp with deno

## Introduction

[deno](https://deno.land)

## Usage

Enter command for starting server.

```
$ deno task dev
```

or

```
$ deno run --allow-net app.ts
```

## Example

`CRUD` with the curl command.

---

```
localhost:8080
```

It returns with `Hello TodoApp with deno!`

---

```
localhost:8080/todos/
```

```
{
  status: 200,
	data: []
}
```

---

### Create(POST)

```
$ curl -X POST -H 'Content-Type: application/json' -d '{"title": "TodoApp with deno", "content": "first posting"}' 'localhost:8080/todos/'
```

### Read(GET)

```
$ curl -X GET 'localhost:8080/todos/'
```

or

ID can be specified.

```
$ curl -X GET 'localhost:8080/todos/{:id}/'
```

### Update(PUT)

Only `isDone` can be updated. (false -> true)

```
$ curl -X PATCH 'localhost:8080/todos/{:id}/'
```

### Delete(DELETE)

```
$ curl -X DELETE 'localhost:8080/todos/{:id}/'
```

## Lock file is create

```
$ deno cache --lock=lock.json --lock-write ./deps.ts
```

```
$ deno cache --reload --lock=lock.json ./deps.ts
```

## Reference

https://deno.land/x/oak/mod.ts

https://deno.land/std@0.152.0/testing/asserts.ts
