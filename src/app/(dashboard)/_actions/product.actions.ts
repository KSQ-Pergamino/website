'use server';
import { connectToDatabase } from '../_lib';
import { Product } from '../models';

export const createProductAction = async (formData: FormData) => {
        await connectToDatabase();
        await Product.create(Object.fromEntries(formData));
}