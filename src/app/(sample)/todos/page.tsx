'use client';

import { Todos } from '@/typings/todos';
import axios from 'axios';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Dialog from './Dialog';
import List from './List';
import Input from './Input';

export type SetData = null | Todos;

async function fetchTodos({ setData }: { setData: Dispatch<SetStateAction<SetData>> }) {
	const res = await axios.get('/api/todos/get');

	setData(res.data);
}

export default function ProjectsPage() {
	const [data, setData] = useState<SetData>(null);
	const [inputAddData, setInputAddData] = useState<string>('');
	const [inputEditId, setInputEditId] = useState<number>(0);
	const [inputEditData, setInputEditData] = useState<string>('');

	const inputAddRef = useRef<null | HTMLInputElement>(null);
	const inputEditRef = useRef<null | HTMLInputElement>(null);
	const dialogRef = useRef<null | HTMLDialogElement>(null);

	useEffect(() => {
		fetchTodos({ setData });
	}, []);

	return (
		<div className="flex min-h-screen">
			<div className="m-auto">
				<h1 className="mb-2 text-center text-2xl font-semibold">Todos List</h1>
				<Input
					fetchTodos={fetchTodos}
					inputAddData={inputAddData}
					inputAddRef={inputAddRef}
					setData={setData}
					setInputAddData={setInputAddData}
				/>

				<List
					data={data}
					dialogRef={dialogRef}
					fetchTodos={fetchTodos}
					setData={setData}
					setInputEditData={setInputEditData}
					setInputEditId={setInputEditId}
				/>
			</div>

			<Dialog
				dialogRef={dialogRef}
				fetchTodos={fetchTodos}
				inputEditData={inputEditData}
				inputEditId={inputEditId}
				inputEditRef={inputEditRef}
				setData={setData}
				setInputEditData={setInputEditData}
			/>
		</div>
	);
}
