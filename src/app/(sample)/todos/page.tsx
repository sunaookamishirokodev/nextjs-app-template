'use client';

import { Todos } from '@/typings/todos';
import axios from 'axios';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type SetData = null | Todos;

async function fetchTodos({ setData }: { setData: Dispatch<SetStateAction<SetData>> }) {
	const res = await axios.get('/api/todos/get');

	setData(res.data);
}

export default function ProjectsPage() {
	const [data, setData] = useState<SetData>(null);
	const [inputData, setInputData] = useState<string>('');

	const inputRef = useRef<null | HTMLInputElement>(null);

	useEffect(() => {
		fetchTodos({ setData });
	}, []);

	return (
		<div className="flex min-h-screen">
			<div className="m-auto">
				<h1 className="mb-2 text-center text-2xl font-semibold">Todos List</h1>
				<div className="flex gap-0.5">
					<input
						ref={inputRef}
						onChange={(e) => setInputData(e.target.value)}
						type="text"
						placeholder="Type here"
						className="min-w-lg input input-bordered mb-4 w-full"
					/>
					<button
						className="btn btn-active"
						onClick={(e) => {
							if (!inputData) {
								e.preventDefault();
								alert('Invalid Input Data');
							} else {
								(async () => {
									await axios.post('/api/todos/post', {
										body: {
											content: inputData,
										},
									});

									fetchTodos({ setData });

									if (inputRef.current) {
										inputRef.current.value = '';
										setInputData('');
									}
								})();
							}
						}}
					>
						Add
					</button>
				</div>
				<ul className="menu divide-y-2 divide-black/50 rounded-box border-2 border-black/50 bg-base-200">
					{data ? (
						data.data.map((v: any, i: number) => {
							return (
								<li key={i}>
									<Link href={`/todos/${v.id}`}>{v.content}</Link>
								</li>
							);
						})
					) : (
						<li>Loading...</li>
					)}
				</ul>
			</div>
		</div>
	);
}
