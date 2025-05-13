import firstImageSlider from '@/assets/images/soja.png'
import secondImageSlider from '@/assets/images/flor-1.jpg'
import thirdImageSlider from '@/assets/images/maiz-1.jpg'
import fourthImageSlider from '@/assets/images/girasol-1.jpg'
import { Slider } from './slider'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { PropsWithChildren } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface HeroSlideProps extends PropsWithChildren {
  buttonUrl: string;
  buttonText: string;
  imageUrl: string | StaticImport;
  imageAlt: string;
}

export const HeroSlide = ({ imageUrl, buttonText, buttonUrl, children, imageAlt }: HeroSlideProps) => {
  return (
    <section className='min-w-full'>
      <article className='h-[calc(100vh_-_128px)] md:h-[calc(100vh_-_128px)] text-background relative bg-black/40 flex items-start justify-center flex-col px-10 md:px-28 lg:px-36'>
        <Image quality={100} loading='lazy' className={`absolute top-0 right-0 bottom-0 left-0 -z-10 bg-cover bg-center object-cover h-full w-full`} src={imageUrl} alt={imageAlt}/>
        <div className='lg:max-w-4/12 mb-12 text-center md:text-start'>
          { children }
        </div>
        <Button asChild><Link href={buttonUrl}>{buttonText}</Link></Button>
      </article>
    </section>
  )
}

export const HeroSection = () => {
    return (
        <>
            <Slider loop>
                <HeroSlide buttonText='Saber más' buttonUrl='#' imageAlt='ASD' imageUrl={firstImageSlider}>
                    <h2 className='text-4xl lg:text-5xl mb-2'><span className='font-bold'>Nanotecnología</span> aplicada al agro.</h2>
                    <p className='text-base lg:text-xl'>Potencia tus cosechas, maximiza tus rindes y facilita la logística con MIST.</p>
                </HeroSlide>
                <HeroSlide buttonText='Ver ensayos' buttonUrl='#' imageAlt='ASD' imageUrl={secondImageSlider}>
                    <h2 className='text-4xl lg:text-5xl mb-2'><span className='font-bold'>Comprometidos</span> con la innovación.</h2>
                    <p className='text-base lg:text-xl'>Explora nuestra biblioteca de ensayos y estudios.</p>
                </HeroSlide>
                <HeroSlide buttonText='Ver productos' buttonUrl='#' imageAlt='ASD' imageUrl={thirdImageSlider}>
                    <h2 className='text-4xl lg:text-5xl mb-2'>Línea <span className='font-bold'>MIST/BIOME.</span></h2>
                    <p className='text-base lg:text-xl'>Explora nuestro catálogo.</p>
                </HeroSlide>
                <HeroSlide buttonText='Saber más' buttonUrl='#' imageAlt='ASD' imageUrl={fourthImageSlider}>
                    <h2 className='text-4xl lg:text-5xl mb-2'><span className='font-bold'>Menos coste</span> mayor produccion.</h2>
                    <p className='text-base lg:text-xl'>Descubre como podemos ayudarte a reducir costes de logística y maximizar tu producción.</p>
                </HeroSlide>
            </Slider>

            <div className='flex flex-col gap-12 p-4 md:p-8 lg:p-20'>
                <section className='flex items-center justify-center border border-foreground/20 rounded-2xl overflow-hidden'>
                    <h2 className='bg-foreground/10 w-full p-12 text-center'>Producto destacado</h2>
                </section>
                <section className='flex items-center justify-center border border-foreground/20 rounded-2xl overflow-hidden'>
                    <h2 className='bg-foreground/10 w-full p-12 text-center'>Noticia destacada</h2>
                </section>
            </div>
        </>
    )
}