import Image from 'next/image';
import nanoIcon from '@/assets/icons/nano-icon.svg';

export const NanoBanner = () => {
    return (
        <section className='px-4 md:px-8 lg:px-32 bg-red-900 text-background py-10'>
            <article>
                <h2 className='text-3xl text-center uppercase font-bold'>Nanopartículas</h2>
                <Image alt='Icono de nanopartículas' src={nanoIcon} className='mx-auto my-8'/>
                <div className='flex gap-12'>
                    <p className='flex-1'>KIOSHI STONE, elabora una novedosa línea de fertilizantes, enmiendas y vivificantes. Estos desarrollos facilitan obtener el máximo de sus cultivos y es el resultado de años de investigación y desarrollo (I+D+i). Estas innovaciones están más que corroboradas en diversas geografías por productores, institutos y facultades. Experiencias a campo y las más variada gama y escala de ensayos que mejoran campaña tras campaña la puesta a punto (formulas, aplicaciones, etc.) para continuar nutriendo suelo y cultivos con nuestros productos.</p>
                    <p className='flex-1'>El equipo técnico científico tiene la convicción y compromiso de continuar día a día con el desarrollo de nuevas y mejores propuestas para aumentar la producción agrícola, manteniendo siempre un profundo respeto por el suelo y el ambiente.</p>
                </div>
            </article>
        </section>
    )
}