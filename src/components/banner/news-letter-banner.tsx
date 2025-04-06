import Image from 'next/image'
import backgroundImage from '@/assets/images/soja.png';

export const NewsLetterBanner = () => {
  return (
    <section className='relative text-background'>
      <div className='absolute top-0 left-0 right-0 bottom-0 -z-10 bg-black/40'>
        <Image quality={100} loading='lazy' className={`absolute top-0 right-0 bottom-0 left-0 -z-10 bg-cover bg-center object-cover h-full w-full`} src={backgroundImage} alt='Fondo de seccion.' />
      </div>
      <article className='text-center bg-black/60 px-4 md:px-8 lg:px-32 py-12'>
        <h2 className='mb-4 text-3xl font-semibold'>Suscribirse al boletín informativo</h2>
        <p className='text-xl'>Recibe noticias, artículos de interés y notas relevantes al sector agro de la región.
          No te pierdas ninguna de nuestras novedades, además es gratis.</p>
      </article>
    </section>
  )
}