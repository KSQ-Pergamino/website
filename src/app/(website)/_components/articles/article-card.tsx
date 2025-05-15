import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarIcon, ChevronRight, ClockIcon, EyeIcon, User2Icon } from 'lucide-react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface ArticleCardProps {
    image: string | StaticImport,
    title: string;
    description: string;
    createdAt: string;
    views: string;
    readingTime: string;
    author: string;
}

export const ArticleCard = ({ author, createdAt, description, image, readingTime, title, views }: ArticleCardProps) => {
    return (
        <Card>
            <div className="w-full px-6 rounded-lg overflow-hidden h-48">
                <Image alt="Producto #1" src={image} className="w-full h-full object-fit rounded-lg" />
            </div>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="flex gap-1"><Badge>Trigo</Badge><Badge>Corrector de suelo</Badge><Badge>Mist Z</Badge></CardDescription>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
            <CardFooter className="flex flex-col justify-between items-start xl:items-center xl:flex-row gap-6 mt-auto">
                <div className="flex gap-2 justify-between w-full flex-col">
                    <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row">
                        <span className="text-sm flex items-center gap-1"><User2Icon size={14} /><b>Autor:</b> {author}</span>
                        <span className="text-sm flex items-center gap-1"><ClockIcon size={14} /><b>Tiempo de lectura:</b> {readingTime}m</span>
                    </div>
                    <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row">
                        <span className="text-sm flex items-center gap-1"><CalendarIcon size={14} /><b>Fecha de publicación:</b> {createdAt}</span>
                        <span className="text-sm flex items-center gap-1"><EyeIcon size={14} /><b>Vistas:</b> {views} lecturas</span>
                    </div>
                </div>
                <Button>Continuar leyendo <ChevronRight /></Button>
            </CardFooter>
        </Card>
    )
}