import { ObjectId } from 'mongoose';

export interface Product {
    _id?: ObjectId;
    name: string;
    category: string;
    subCategory: string;
    shortDescription: string;
    description: string;
    tags: string[];
    slug: string;
    images: ProductImage[];
    isActive: boolean;
    isAvailable: boolean;
    updatedAt: Date;
    createdAt: Date;
}

export interface ProductImage {
    _id: ObjectId;
    url: string;
    isThumbnail: boolean;
    imageDescription: string;
    createdAt: Date;
    updatedAt: Date;
}