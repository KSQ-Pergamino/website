import { z } from 'zod';

export const productFormSchema = z.object({
    name: z.string(),
    category: z.string(),
    subCategory: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    slug: z.string(),
    images: z.array(z.any()),
})

export type ProductFormSchema = z.infer<typeof productFormSchema>;