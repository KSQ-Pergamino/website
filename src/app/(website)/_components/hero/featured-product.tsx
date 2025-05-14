import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import placeholderImage from '@/assets/images/girasol-1.jpg'
import { Button } from "@/components/ui/button"

export const FeaturedProduct = () => {
    return (
        <section className="flex flex-col">
            <h2 className="text-3xl font-semibold mb-6">Productos destacado</h2>
            <Card className="flex flex-col items-center md:flex-row ">
                <Image alt="Producto #1" src={placeholderImage} className="w-40 h-40 object-center rounded-sm ml-6" />
                <div className="">
                    <CardHeader>
                        <CardTitle>Mist TP320</CardTitle>
                        <CardDescription>Corrector de suelo</CardDescription>
                    </CardHeader>
                    <CardContent className="mb-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laborum ad, voluptas ut nesciunt quia nam magnam! Vitae magni qui, ab velit aperiam, dolorem quaerat magnam, unde cupiditate quae delectus laborum tenetur consectetur in blanditiis recusandae ea id obcaecati quos eveniet. Fugit autem culpa provident magnam pariatur corrupti aut quia!</p>
                    </CardContent>
                    <CardFooter className="w-full flex justify-end">
                        <Button>Ver más</Button>
                    </CardFooter>
                </div>
            </Card>
        </section>
    )
}