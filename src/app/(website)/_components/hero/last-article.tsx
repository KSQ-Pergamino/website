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

export const LastArticle = () => {
    return (
        <section className="flex flex-col">
            <div className="mb-6">
                <h2 className="text-3xl font-semibold mb-2">Noticias destacadas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sample card #1 */}
                <Card>
                    <div className="w-full px-6 rounded-lg overflow-hidden h-48">
                        <Image alt="Producto #1" src={placeholderImage} className="w-full h-full object-fit rounded-lg" />
                    </div>
                    <CardHeader>
                        <CardTitle>Cómo mejorar el suelo y aumentar el rendimiento del trigo.</CardTitle>
                        <CardDescription className="flex gap-1"><Badge>Trigo</Badge><Badge>Corrector de suelo</Badge><Badge>Mist Z</Badge></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>La Bolsa de Cereales informo el panorama favorable para la siembra de fina en esta campaña 25/26, esperándose un área de 6,7 millones de hectáreas para el trigo, con una producción estimada en 20,5 millones de toneladas. Ante este escenario prometedor, los suelos pueden ser un factor limitante para alcanzar los objetivos buscados. La pérdida del equilibrio ácido-base en suelos con mucha historia agrícola a través de lixiviación, erosión o acidificación, requiere un enfoque técnico de reposición.</p>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-between items-start xl:items-center xl:flex-row gap-6 mt-auto">
                        <div className="flex gap-2 justify-between w-full flex-col">
                            <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row">
                                <span className="text-sm flex items-center gap-1"><b>Autor:</b> Fernando Gorordo<User2Icon size={14} /></span>
                                <span className="text-sm flex items-center gap-1"><b>Tiempo de lectura:</b> 12m <ClockIcon size={14} /></span>
                            </div>
                            <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row">
                                <span className="text-sm flex items-center gap-1"><b>Fecha de publicación:</b> 5 Enero, 2025 <CalendarIcon size={14} /></span>
                                <span className="text-sm flex items-center gap-1"><b>Vistas:</b> 1032 lecturas <EyeIcon size={14} /></span>
                            </div>
                        </div>
                        <Button>Continuar leyendo <ChevronRight /></Button>
                    </CardFooter>
                </Card>

                {/* Sample card #2 */}
                <Card>
                    <div className="w-full px-6 rounded-lg overflow-hidden h-48">
                        <Image alt="Producto #1" src={placeholderImage2} className="w-full h-full object-fit rounded-lg" />
                    </div>
                    <CardHeader>
                        <CardTitle>Cómo reducir la brecha de rendimiento en maíz con una fertilización estratégica.</CardTitle>
                        <CardDescription className="flex gap-1"><Badge>Maiz</Badge><Badge>Nutrientes</Badge><Badge>Mist TP50</Badge></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>En Argentina, la brecha de producción puede reducir hasta un 30% el rendimiento potencial del maíz, como consecuencia de un manejo inadecuado de nutrientes esenciales como el nitrógeno, fósforo, azufre y zinc. Un manejo correcto de la nutrición es fundamental para alcanzar altos rendimientos y sostenerlos en el tiempo.</p>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-between items-start xl:items-center xl:flex-row gap-6 mt-auto">
                        <div className="flex gap-2 justify-between w-full flex-col">
                            <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row">
                                <span className="text-sm flex items-center gap-1"><b>Autor:</b> Fernando Gorordo<User2Icon size={14} /></span>
                                <span className="text-sm flex items-center gap-1"><b>Tiempo de lectura:</b> 5m <ClockIcon size={14} /></span>
                            </div>
                            <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row">
                                <span className="text-sm flex items-center gap-1"><b>Fecha de publicación:</b> 12 Enero, 2025 <CalendarIcon size={14} /></span>
                                <span className="text-sm flex items-center gap-1"><b>Vistas:</b> 318 lecturas <EyeIcon size={14} /></span>
                            </div>
                        </div>
                        <Button>Continuar leyendo <ChevronRight /></Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="mt-6 w-full flex justify-end">
                <Link href='#' className="flex gap-2 items-center text-green-800 underline">Ver todas las noticias <ArrowRightIcon size={16} /></Link>
            </div>
        </section>
    )
}