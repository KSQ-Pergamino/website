import Link from 'next/link';
import { DesktopHeader, MobileHeader } from './components';


const navigationLinks = [
  {
    title: 'Inicio',
    href: '#'
  },
  {
    title: 'Nosotros',
    href: '#'
  },
  {
    title: 'Productos',
    href: '#'
  },
  {
    title: 'Información Técnica',
    href: '#'
  },
  {
    title: 'Noticias',
    href: '#'
  },
  {
    title: 'Contacto',
    href: '#'
  },
]

export const Header = () => {
  return (
    <header className='sticky top-0'>
      <MobileHeader navigationLinks={navigationLinks}/>
      <DesktopHeader navigationLinks={navigationLinks}/>
    </header>
  )
}