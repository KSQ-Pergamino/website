import Link from "next/link"
import { NavigationLink } from "./header"
import Image from "next/image"
import headerLogo from '@/assets/header-logo.svg';

interface DesktopNavigationProps {
    navigationLinks: NavigationLink[]
};

const renderDesktopLinks = (navigationLinks: NavigationLink[]) => {
    return navigationLinks.map(item => {
        return (<li key={item.title} className='transition-all duration-300 hover:font-bold'><Link href={item.href}>{item.title}</Link></li>)
    });
};

export const DesktopNavigation = ({navigationLinks}:DesktopNavigationProps) => {
    return (
        <div className='hidden md:block'>
            {/* <Image className='opacity-30 absolute -z-10 -top-1/12 bottom-0 -left-1/18 h-full' src={mistBgImage} alt='Logo Mist - Kioshi Stone'/> */}
            <div className='flex justify-between'>
                <div className='flex gap-12 items-center md:ml-8 lg:ml-20 py-2'>
                    {/* Optimizar Link para Screen readers only */}
                    <Link href={"/"} className='-translate-y-2'><Image alt='Logo de KSQ Pergamino' src={headerLogo} width={112} /></Link>
                    <div className=''>
                        <h2 className='text-primary font-bold text-xl'>Nanotecnología en minerales.</h2>
                        <h3 className='text-xl'>Distribuidor regional <b className='text-red-900'>KIOSHI STONE.</b></h3>
                    </div>
                </div>
                <div className='bg-[url(../assets/header-image.svg)] h-[80px] bg-no-repeat bg-cover w-3/12' />
            </div>
            <nav className='bg-green-800'>
                <ul className='flex gap-12 justify-center text-background py-3'>
                    {
                        renderDesktopLinks(navigationLinks)
                    }
                </ul>
            </nav>
        </div>
    );
};

