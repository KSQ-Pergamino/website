'use client';

import clsx from 'clsx';
import { useState } from 'react';
import mistBgImage from '@/assets/mist-bg-header.svg'
import { NavigationLink } from './header';
import Link from 'next/link';
import Image from 'next/image';
import headerLogo from '@/assets/header-logo.svg';
import { CopyrightText } from '../common/copyright-text';

interface MobileHeaderProps {
    navigationLinks: NavigationLink[];
}

const renderMobileLinks = (navigationLinks: NavigationLink[]) => {
    return navigationLinks.map(item => {
        return (<li className='text-xl font-medium' key={item.title}><Link href={item.href}>{item.title}</Link></li>)
    })
}

export const MobileNavigation = ({navigationLinks}: MobileHeaderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className='relative'>
            <div className='md:hidden px-4 py-2 bg-background flex items-center justify-between h-20 z-10'>
                <Link href={"/"}><Image alt='Logo de KSQ Pergamino' src={headerLogo} width={120} /></Link>
                <div className='bg-[url(../assets/header-image.svg)]  bg-no-repeat bg-cover w-6/12 absolute top-0 right-0 bottom-0' />
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='bg-green-800/60 rounded-2xl h-12 w-12 border-2 border-green-800 p-2 cursor-pointer z-10'
                >
                    <div
                        className={clsx('transition-all duration-300 before:transition-all before:duration-300 after:transition-all after:duration-300 h-0.5 rounded-sm bg-background relative before:content-[""] before:h-0.5 before:rounded-sm before:bg-background before:absolute before:left-0 before:right-0 before:w-full after:content-[""] after:h-0.5 after:rounded-sm after:bg-background after:absolute after:left-0 after:right-0 after:w-full', isOpen ? 'bg-transparent before:translate-y-0 after:translate-y-0 before:-rotate-45 after:rotate-45' : 'before:-translate-y-2 after:translate-y-2')}
                    />
                </button>
            </div>
            <nav className={clsx('md:hidden bg-green-800/80 p-4 text-background absolute top-20 left-0 right-0 transition-all duration-300 h-[calc(100vh_-_128px)]', isOpen ? 'translate-x-0 backdrop-blur-xs' : '-translate-x-full')}>
                <div className='mb-8 text-center'>
                    <h2 className='text-background font-bold text-xl'>Nanotecnología en minerales.</h2>
                    <h3 className='text-xl'>Distribuidor regional <b className='text-red-900'>KIOSHI STONE.</b></h3>
                </div>
                <div className='border-b border-background/50 mb-4'>
                    <span>Menu Principal</span>
                </div>
                <ul className='flex flex-col gap-4'>
                    {
                        renderMobileLinks(navigationLinks)
                    }
                </ul>
                <CopyrightText className='text-xs text-center text-background/80 mt-4' />
            </nav>
        </div>
    )
}