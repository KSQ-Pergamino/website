import Image from 'next/image';
import { NanoBanner } from './_components/banner/banner';
import { Benefits } from './_components/benefits/benefits';
import { HeroSection } from './_components/hero/hero';
import { Protocols } from './_components/protocols/protocols';
import backgroundImage from '@/assets/images/soja.png';

import kioshiFlag from '@/assets/kioshi-flag.svg';
import { ContactForm } from './_components/contact/form';

const Contact = () => {
    return (
        <section className='px-4 md:px-8 lg:px-32 py-12'>
            <article>
                <h2 className='mb-4 text-3xl uppercase font-bold text-primary'>Contacto</h2>
                <p className='text-xl'><span className='font-bold'>¿Listo para potenciar tus cultivos?</span>  Habla directamente con nuestros expertos.</p>
                <div className='flex mt-12 gap-12'>
                    <div className='flex-1'>
                        <h3 className='font-bold text-primary text-xl mb-4'>Información de contacto</h3>
                        <p><span className='font-bold'>Email:</span> contacto@ksqpergamino.com.ar</p>
                        <p><span className='font-bold'>Oficinas comerciales:</span> Ruta 8 Km. 123 - Pergamino, Buenos Aires</p>
                        <p><span className='font-bold'>Teléfonos:</span> +5492477112233 / +5492477445566</p>
                        <div className='flex justify-center mt-12'>
                            <Image alt='Bandera Kioshi Stone' src={kioshiFlag}/>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <ContactForm />
                    </div>
                </div>
            </article>
        </section>
    )
}



const Studies = () => {
  return (
    <section className='px-4 md:px-8 lg:px-32 py-12'>
      <article>
        <h2 className='mb-4 text-3xl uppercase font-bold text-primary'>Ensayos</h2>
        <p className='text-xl'>En Kioshi Stone estamos comprometidos con la innovación en la agricultura. Presentamos una serie de informes técnicos y experimentales que abordan distintas estrategias de nutrición vegetal, manejo de suelos y fertilización, con el objetivo de mejorar el rendimiento de los cultivos y la sostenibilidad del agro.</p>
      </article>
    </section>
  )
}

const NewsLetterBanner = () => {
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

const FeaturedNews = () => {
    return (
        <section className='px-4 md:px-8 lg:px-32 py-12'>
            <h2 className='mb-4 text-3xl uppercase font-bold text-primary'>Noticias/Articulos</h2>
        </section>
    )
}

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <Benefits />
        <NanoBanner />
        <Protocols />
        <Studies />
        <NewsLetterBanner />
        <FeaturedNews />
        <Contact />
      </main>
    </div>
  );
}
