"use server"

import createSupabaseServerClient from "@/lib/supabase/server";

export async function signUpWithEmailAndPassword(data: {
	email: string;
	password: string;
	confirm: string;
}) {
	const supabase = await createSupabaseServerClient();

	const response = await supabase.auth.signUp({ 
		email: data.email, 
		password: data.password 
	});

	return JSON.stringify(response);
}

export async function signInWithEmailAndPassword(data: {
	email: string;
	password: string;
}) { }
