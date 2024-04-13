export interface Todos {
	statusCode: number;
	data: {
		id: number;
		content: string;
	}[];
}

export interface Todo extends Todos {
	data: {
		id: number;
		content: string;
	};
}
