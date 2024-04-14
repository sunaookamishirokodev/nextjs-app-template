import axios from 'axios';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { SetData } from './page';

export default function Input({
	inputAddRef,
	setInputAddData,
	inputAddData,
	fetchTodos,
	setData,
}: {
	inputAddRef: MutableRefObject<HTMLInputElement | null>;
	setInputAddData: Dispatch<SetStateAction<string>>;
	inputAddData: string;
	fetchTodos: ({ setData }: { setData: Dispatch<SetStateAction<SetData>> }) => void;
	setData: Dispatch<SetStateAction<SetData>>;
}) {
	return (
		<div className="flex gap-0.5">
			<input
				ref={inputAddRef}
				onChange={(e) => setInputAddData(e.target.value)}
				type="text"
				placeholder="Type here"
				className="min-w-lg input input-bordered mb-4 w-full"
			/>
			<button
				className="btn btn-active"
				onClick={(e) => {
					if (!inputAddData) {
						return alert('Invalid Input Data');
					}
					(async () => {
						await axios.post('/api/todos/post', {
							body: {
								content: inputAddData,
							},
						});

						fetchTodos({ setData });

						if (inputAddRef.current) {
							inputAddRef.current.value = '';
						}
					})();
				}}
			>
				Add
			</button>
		</div>
	);
}
