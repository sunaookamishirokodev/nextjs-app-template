import db from '@/database';
import { NextResponse } from 'next/server';
export async function DELETE(req: Request) {
	const { searchParams } = new URL(req.url);
	const id = searchParams.get('id');
	if (!id) return NextResponse.error();

	let res;
	try {
		await db.todos.delete({
			where: {
				id: +id,
			},
		});

		res = {
			statusCode: 200,
		};
	} catch (error) {
		res = {
			statusCode: 400,
		};
	}

	return NextResponse.json(res);
}
