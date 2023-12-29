import React from "react";
import { redirect } from "next/navigation";

import { cn } from "@/lib/utils";
import readUserSession from "@/lib/actions";
import CreateForm from "./components/CreateForm";
import { Button } from "@/components/ui/button";
import { deleteTodoById, readTodo, updateTodoById } from "./actions";

export default async function Page() {

	const { data: todos } = await readTodo();

	// const { data } = await readUserSession();

	// if (!data.session) {
	// 	return redirect("/auth-server-action")
	// }

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-96 space-y-5">
				<CreateForm />

				{todos?.map((todo, index) => {
					const deleteTodo = deleteTodoById.bind(null, todo.id);
					const updateTodo = updateTodoById.bind(null, todo.id, !todo.completed);

					return (
						<div key={index} className="flex items-center gap-6">
							<h1
								className={cn({
									"line-through": todo.completed,
								})}
							>
								{todo.title}
							</h1>

							<form action={deleteTodo}>
								<Button>delete</Button>
							</form>
							<form action={updateTodo}>
								<Button>Update</Button>
							</form>
						</div>
					);
				})}
			</div>
		</div>
	);
}
