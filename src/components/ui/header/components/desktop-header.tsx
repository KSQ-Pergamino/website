import Image from 'next/image';
import Link from 'next/link';

import headerLogo from '@/assets/header-logo.svg';

const renderDesktopLinks = (navigationLinks: any[]) => {
    return navigationLinks.map(item => {
      return (<li key={item.title} className='transition-all duration-300 hover:font-bold'><Link href={item.href}>{item.title}</Link></li>)
    })
  }

interface DesktopHeaderProps {
    navigationLinks: any[]
}

export const DesktopHeader = ({navigationLinks}: DesktopHeaderProps) => {
    return (
        <div className='hidden md:block bg-background'>
            <div className='flex justify-between'>
                <div className='flex gap-12 items-center md:ml-8 lg:ml-20 py-2'>
                    {/* Optimizar Link para Screen readers only */}
                    <Link href={"/"} className='-translate-y-2'><Image alt='Logo de KSQ Pergamino' src={headerLogo} width={112} /></Link>
                    <div className=''>
                        <h2 className='text-primary font-bold text-xl'>Nanotecnología en minerales.</h2>
                        <h3 className='text-xl'>Distribuidor regional KIOSHI STONE</h3>
                    </div>
                </div>
                <div className='bg-[url(../assets/header-image.svg)] h-[80px] bg-no-repeat bg-cover w-3/12' />
            </div>
            <nav className='bg-primary-light'>
                <ul className='flex gap-12 justify-center text-background py-3'>
                    {
                        renderDesktopLinks(navigationLinks)
                    }
                </ul>
            </nav>
        </div>
    )
}