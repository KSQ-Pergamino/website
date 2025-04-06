import { BenefitCard } from './components/benefit-card';
import firstCardIcon from '@/assets/icons/bullet-2.png';
import secondCardIcon from '@/assets/icons/bullet-3.png';
import thirdCardIcon from '@/assets/icons/bullet-1.png';

export const Benefits = () => {
  return (
    <section className='px-4 md:px-8 lg:px-32 py-12'>
        <article>
            <h2 className='mb-4 text-3xl text-center uppercase font-bold text-primary'>Nanotecnología que revoluciona el agro</h2>
            <p className='text-center'>Somos pioneros en aplicar <span className='font-bold'>nanopartículas minerales</span> de tamaño 1-100 nm, diseñadas para:</p>
            <ul className='flex flex-col gap-4 mt-10'>
                <li className='text-xl'><span className='font-bold'>Absorción 3x más rápida</span> que los fertilizantes tradicionales.</li>
                <li className='text-xl'><span className='font-bold'>Reducción del 50% en dosis</span> gracias a su alta eficiencia catalítica.</li>
                <li className='text-xl'><span className='font-bold'>Cero residuos tóxicos:</span> Compatible con la biota del suelo y la fotosíntesis.</li>
                <li className='text-xl'><span className='font-bold'>Aplicación flexible:</span> Úsalo en siembra, pulverización o junto a fitosanitarios.</li>
            </ul>
        </article>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-12'>
            <BenefitCard alt='Icono de Tarjeta' imagePath={firstCardIcon}>
                <p><span className='font-bold'>KIOSHI STONE SA, es la primera empresa en llevar adelante procesos nano tecnológicos industriales para el agro.</span> Posee una vasta experiencia en I+D+i que permite la generación continua de más herramientas para una agricultura de altos rendimientos, baja logística y de una imperceptible huella de carbono (CO2-eq), en relación con otras tecnologías de práctica.</p>
            </BenefitCard>
            <BenefitCard alt='Icono de Tarjeta' imagePath={secondCardIcon}>
                <p><span className='font-bold'>Nuestros productos actúan y proporcionan importantes mejoras de salud del suelo (biota);</span> su interacción inmediata y efecto sinérgico con los ecosistemas logran <span className='font-bold'>altos rendimientos en todos los cultivos</span> (extensivos e intensivos); incrementando la actividad biológica y favoreciendo su desarrollo.</p>
            </BenefitCard>
            <BenefitCard alt='Icono de Tarjeta' imagePath={thirdCardIcon}>
                <p>Es por ello, que <span className='font-bold'>en KIOSHI STONE, día a día seguimos evaluando los beneficios que proporcionan el uso de minerales en tamaño nanométrico,</span> logrando aprovechar su gran capacidad de reacción, con muy bajo requerimiento de energía, en procesos biológicos tan importantes.</p>
            </BenefitCard>
        </section>
    </section>
  )
}