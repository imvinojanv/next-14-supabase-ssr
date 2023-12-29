import React from "react";
import { redirect } from "next/navigation";

import { AuthForm } from "./components/AuthForm";
import readUserSession from "@/lib/actions";

export default async function page() {
	// const { data } = await readUserSession();

	// if (data.session) {
	// 	return redirect("/todo")
	// }

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-96">
				<AuthForm />
			</div>
		</div>
	);
}
