'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Todo } from '@/typings/todos';
import { _redirect } from '@/app/actions';

export default function ProjectsNamePage({ params: { id } }: { params: { id: string } }) {
	const [data, setData] = useState<null | Todo>(null);

	useEffect(() => {
		(async () => {
			const res = await axios.get(`/api/todos/get?id=${id}`);
			const result = res.data;
			if (result.statusCode === 400) {
				_redirect('/todos');
			} else {
				setData(result);
			}
		})();
	}, [id]);

	return (
		<div className="flex min-h-screen">
			<div className="m-auto">
				<div>My todo id: {data ? data.data?.id : 'Loading...'}</div>
				<div>My todo content: {data ? data.data?.content : 'Loading...'}</div>
			</div>
		</div>
	);
}
