'use client';
import { Todo } from '@/typings/todos';
import { _redirect } from '@/app/actions';
import useClientFetch from '@/hooks/useClientFetch';

export default function ProjectsNamePage({ params: { id } }: { params: { id: string } }) {
	const res = useClientFetch<Todo>({
		url: `/api/todos/get?id=${id}`,
		redirect404: '/todos',
		config: {
			method: 'get',
		},
	});

	return (
		<div className="flex min-h-screen">
			<div className="m-auto">
				{res.isLoading ? (
					<div>Loading...</div>
				) : (
					<>
						<div>My todo id: {res.data?.data?.id}</div>
						<div>My todo content: {res.data?.data?.content}</div>
					</>
				)}
			</div>
		</div>
	);
}
