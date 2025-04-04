import { Slider } from '../ui'
import { HeroSlide } from './components';

import firstImageSlider from '@/assets/images/soja.png'
import secondImageSlider from '@/assets/images/flor-1.jpg'
import thirdImageSlider from '@/assets/images/maiz-1.jpg'
import fourthImageSlider from '@/assets/images/girasol-1.jpg'

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