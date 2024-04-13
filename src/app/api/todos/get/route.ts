import db from '@/database';
import { Todo, Todos } from '@/typings/todos';
import { NextResponse } from 'next/server';
export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	let res;
	const id = searchParams.get('id');

	if (id) {
		const data = await db.todos.findUnique({
			where: {
				id: +id,
			},
		});

		res = {
			statusCode: data ? 200 : 400,
			data,
		} as Todo;
	} else {
		const data = await db.todos.findMany({
			orderBy: {
				id: 'desc',
			},
		});

		res = {
			statusCode: data ? 200 : 400,
			data,
		} as Todos;
	}

	return NextResponse.json(res);
}
