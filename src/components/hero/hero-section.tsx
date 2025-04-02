import { Button } from '../ui'

export const HeroSection = () => {
    return (
        <>
            <section>
                <article className='text-background relative min-h-[544px] bg-black/40 flex items-start justify-center flex-col px-4 md:px-8 lg:px-20'>
                    <div className='bg-[url(../assets/images/soja.png)] absolute top-0 right-0 bottom-0 left-0 -z-10 bg-cover bg-center' />
                    <div className='lg:max-w-4/12 mb-12 text-center md:text-start'>
                        <h2 className='text-4xl lg:text-5xl mb-2'><span className='font-bold'>Nanotecnología</span> aplicada al agro</h2>
                        <p className='text-base lg:text-xl'>Potencia tus cosechas, maximiza tus rindes y facilita la logística con MIST</p>
                    </div>
                    <Button href='#'>Saber más</Button>
                </article>
            </section>
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