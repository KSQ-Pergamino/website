import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import placeholderImage from '@/assets/products/TPS-8.png'
import placeholderImage2 from '@/assets/products/TPS-Cu-8.png'
import placeholderImage3 from '@/assets/products/TPS-78-8.png'
import placeholderImage4 from '@/assets/products/S+-8.png'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ProductCard } from '../products'

export const FeaturedProduct = () => {
    return (
        <section className="flex flex-col">
            <h2 className="text-3xl font-semibold mb-6">Productos destacado</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <ProductCard category='Correción de suelo' image={placeholderImage} title='TPS' />
                <ProductCard category='Correción de suelo' image={placeholderImage2} title='CU'  subCategory='Microelementos'/>
                <ProductCard category='Correción de suelo' image={placeholderImage3} title='TPS 78' />
                <ProductCard category='Correción de suelo' image={placeholderImage4} title='S+' />
            </div>
        </section>
    )
}