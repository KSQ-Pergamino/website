import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
    title: string;
    image: string | StaticImport
    category: string;
    subCategory?: string;
}

export const ProductCard = ({ category, image, title, subCategory }: ProductCardProps) => {
    return (
        <Link href={'#'}>
            <Card className="hover:shadow-xl transition-all duration-300 group h-full">
                <CardHeader className='flex items-center justify-center'>
                    <Image alt="Producto #1" src={image} className="" />
                </CardHeader>
                <CardContent className="">
                    <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
                    <CardDescription className='font-semibold text-black'>Correción de suelo</CardDescription>
                    <CardDescription className=''>{subCategory ? subCategory : '-'}</CardDescription>
                </CardContent>
                <CardContent className='flex gap-1 flex-wrap'>
                    <Badge>Trigo</Badge><Badge>{category}</Badge><Badge>Mist Z</Badge>
                </CardContent>
                <CardFooter className='flex flex-col items-start'>
                    <CardTitle className='mb-1'>Contenido y riqueza garantizada</CardTitle>
                    <hr className='mb-2 w-full block' />
                    <div className="grid grid-cols-3 gap-6">
                        <CardDescription className=''>Azufre (S): 18%</CardDescription>
                        <CardDescription className=''>Calcio (Ca): 3%</CardDescription>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}