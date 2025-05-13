import mongoose, { Document, Model, Schema } from 'mongoose'


interface DatabaseProductImage extends Document {
    url: string;
    isThumbnail: boolean;
};

interface Product extends Document {
    name: string;
    category: string;
    subCategory: string;
    shortDescription: string;
    description: string;
    tags: string[];
    slug: string;
    images: DatabaseProductImage[];
    isActive: boolean;
    isAvailable: boolean;
};

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: Array<string>, default: [] },
    slug: { type: String, required: true, unique: true },
    images: { type: Array<string>, default: [] },
    isActive: {type: Boolean, default: true },
    isAvailable: {type: Boolean, default: true }
}, {timestamps: true});

export const Product: Model<Product> = mongoose.models.Product || mongoose.model<Product>('Product', ProductSchema);