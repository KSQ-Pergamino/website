import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export interface NavigationLink {
    title: string;
    href: string;
};

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
];

export const Header = () => {
    return (
        <header className='sticky top-0 z-50 bg-background'>
            <DesktopNavigation navigationLinks={navigationLinks} />
            <MobileNavigation navigationLinks={navigationLinks} />
        </header>
    );
};