'use client';

import { useEffect, useState } from 'react';
import { _redirect } from './actions';

export default function NotFound() {
	const [count, setCount] = useState<number>(5);

	useEffect(() => {
		setTimeout(() => {
			if (count > 0) {
				setCount(count - 1);
			} else {
				_redirect('/');
			}
		}, 1000);
	}, [count]);

	return (
		<div id="root" className="flex h-screen w-screen">
			<main className="m-auto text-center">
				<div>Sorry, this page not found</div>
				<div>Return to homepage in {count}s</div>
			</main>
		</div>
	);
}
