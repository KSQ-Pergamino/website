import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ArrowRightIcon, CalendarIcon, ChevronRight, ClockIcon, EyeIcon, User2Icon } from "lucide-react"
import placeholderImage from '@/assets/images/soja.png'
import placeholderImage2 from '@/assets/images/maiz-1.jpg'
import Image from "next/image"
import Link from "next/link"
import { ArticleCard } from '../articles'

export const LastArticle = () => {
    return (
        <section className="flex flex-col">
            <div className="mb-6">
                <h2 className="text-3xl font-semibold mb-2">Noticias destacadas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <ArticleCard
                    author='Fernando Gorordo'
                    createdAt='5 Enero, 2025'
                    description='La Bolsa de Cereales informo el panorama favorable para la siembra de fina en esta campaña 25/26, esperándose un área de 6,7 millones de hectáreas para el trigo, con una producción estimada en 20,5 millones de toneladas. Ante este escenario prometedor, los suelos pueden ser un factor limitante para alcanzar los objetivos buscados. La pérdida del equilibrio ácido-base en suelos con mucha historia agrícola a través de lixiviación, erosión o acidificación, requiere un enfoque técnico de reposición.'
                    image={placeholderImage}
                    readingTime='12'
                    title='Cómo mejorar el suelo y aumentar el rendimiento del trigo.'
                    views='1032'
                />

                <ArticleCard
                    author='Fernando Gorordo'
                    createdAt='12 Enero, 2025'
                    description='En Argentina, la brecha de producción puede reducir hasta un 30% el rendimiento potencial del maíz, como consecuencia de un manejo inadecuado de nutrientes esenciales como el nitrógeno, fósforo, azufre y zinc. Un manejo correcto de la nutrición es fundamental para alcanzar altos rendimientos y sostenerlos en el tiempo.'
                    image={placeholderImage2}
                    readingTime='5'
                    title='Cómo reducir la brecha de rendimiento en maíz con una fertilización estratégica.'
                    views='318'
                />
            </div>
            <div className="mt-6 w-full flex justify-end">
                <Link href='#' className="flex gap-2 items-center text-green-800 underline text-xl">Ver todas las noticias <ArrowRightIcon size={20} /></Link>
            </div>
        </section>
    )
}