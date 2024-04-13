import db from '@/database';
import { Todos } from '@/typings/todos';
import { NextResponse } from 'next/server';
export async function POST(req: Request) {
	const request = await req.json();
	const data = await db.todos.create({
		data: {
			content: request.body.content,
		},
	});

	const res = {
		statusCode: data ? 200 : 400,
	} as Todos;

	return NextResponse.json(res);
}
