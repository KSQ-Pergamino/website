import { DesktopHeader, MobileHeader } from './components';
import { NavigationLink } from '@/interfaces';


const navigationLinks: NavigationLink[] = [
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
    <header className='sticky top-0 z-50'>
      <MobileHeader navigationLinks={navigationLinks}/>
      <DesktopHeader navigationLinks={navigationLinks}/>
    </header>
  )
}