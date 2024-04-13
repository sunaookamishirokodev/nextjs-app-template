import axios, { AxiosRequestConfig } from 'axios';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useClientFetch<S>({
	url,
	redirect404,
	config,
}: {
	url: string;
	redirect404?: string;
	config?: AxiosRequestConfig;
}) {
	const [data, setData] = useState<null | S>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		(async () => {
			const res = await axios(url, config);

			if (res.data) {
				setData(res.data);
			} else if (redirect404) {
				redirect(redirect404);
			}

			setIsLoading(false);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		data,
		isLoading,
	};
}
