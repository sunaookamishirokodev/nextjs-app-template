import axios from 'axios';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { SetData } from './page';

export default function Dialog({
	dialogRef,
	inputEditRef,
	inputEditData,
	inputEditId,
	setInputEditData,
	fetchTodos,
	setData,
}: {
	dialogRef: MutableRefObject<HTMLDialogElement | null>;
	inputEditRef: MutableRefObject<HTMLInputElement | null>;
	inputEditData: string;
	inputEditId: number;
	setInputEditData: Dispatch<SetStateAction<string>>;
	fetchTodos: ({ setData }: { setData: Dispatch<SetStateAction<SetData>> }) => void;
	setData: Dispatch<SetStateAction<SetData>>;
}) {
	return (
		<dialog ref={dialogRef} className="modal">
			<div className="modal-box">
				<div className="flex gap-0.5">
					<input
						ref={inputEditRef}
						value={inputEditData}
						onChange={(e) => setInputEditData(e.target.value)}
						type="text"
						placeholder="Type here"
						className="min-w-lg input input-bordered mb-4 w-full"
					/>
					<form method="dialog">
						<button
							className="btn btn-active"
							onClick={(e) => {
								if (!inputEditData) {
									return alert('Invalid Input Data');
								}
								(async () => {
									await axios.patch('/api/todos/patch', {
										body: {
											id: inputEditId,
											content: inputEditData,
										},
									});

									fetchTodos({ setData });

									if (inputEditRef.current) {
										inputEditRef.current.value = '';
										setInputEditData('');
									}

									if (dialogRef.current) {
										dialogRef.current;
									}
								})();
							}}
						>
							Apply
						</button>
					</form>
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-active">Close</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}
