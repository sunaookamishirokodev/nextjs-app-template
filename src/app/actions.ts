'use server';
import { redirect } from 'next/navigation';

export async function _redirect(path: string = '/') {
	redirect(path);
}
