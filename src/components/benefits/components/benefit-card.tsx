import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

interface BenefitsCardProps extends PropsWithChildren {
    imagePath: string | StaticImport;
    alt: string;
}

export const BenefitCard = ({ children, imagePath, alt }: BenefitsCardProps) => {
    return (
        <article>
            <Image alt={alt} src={imagePath} className='mb-6 mx-auto' />
            <div className='text-sm'>
                {children}
            </div>
        </article>
    )
}