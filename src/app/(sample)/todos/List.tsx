import axios from 'axios';
import Link from 'next/link';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { SetData } from './page';

export default function List({
	data,
	dialogRef,
	fetchTodos,
	setData,
	setInputEditId,
	setInputEditData,
}: {
	data: SetData;
	dialogRef: MutableRefObject<HTMLDialogElement | null>;
	fetchTodos: ({ setData }: { setData: Dispatch<SetStateAction<SetData>> }) => void;
	setData: Dispatch<SetStateAction<SetData>>;
	setInputEditId: Dispatch<SetStateAction<number>>;
	setInputEditData: Dispatch<SetStateAction<string>>;
}) {
	return (
		<ul className="menu divide-y-2 divide-black/50 rounded-box border-2 border-black/50 bg-base-200">
			{data ? (
				data.data.map((v: any, i: number) => {
					return (
						<li key={i} className="flex flex-row gap-1">
							<Link className="flex-1" href={`/todos/${v.id}`}>
								{v.content}
							</Link>
							<button
								className="btn btn-accent btn-sm my-auto"
								onClick={() => {
									if (dialogRef.current) {
										dialogRef.current.showModal();
									}
									setInputEditId(v.id);
									setInputEditData(v.content);
								}}
							>
								Edit
							</button>
							<button
								onClick={() => {
									(async () => {
										await axios.delete(`/api/todos/delete?id=${v.id}`);

										fetchTodos({ setData });
									})();
								}}
								className="btn btn-error btn-sm my-auto"
							>
								Delete
							</button>
						</li>
					);
				})
			) : (
				<li>Loading...</li>
			)}
		</ul>
	);
}
