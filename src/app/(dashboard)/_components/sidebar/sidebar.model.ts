import { BoxesIcon, ContactRoundIcon, HomeIcon, InboxIcon, LucideProps, NewspaperIcon, SettingsIcon, UsersIcon } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type NavigationMenu = {
    title: string;
    url: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

// Menu items.
export const navigationItems: NavigationMenu[] = [
  {
    title: "Inicio",
    url: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Mensajes",
    url: "/dashboard/mensajes",
    icon: InboxIcon,
  },
  {
    title: "Contactos",
    url: "/dashboard/contactos",
    icon: ContactRoundIcon,
  },
  {
    title: "Noticias/Articulos",
    url: "/dashboard/noticias",
    icon: NewspaperIcon,
  },
  {
    title: "Productos",
    url: "/dashboard/productos",
    icon: BoxesIcon,
  },
  {
    title: "Usuarios",
    url: "/dashboard/usuarios",
    icon: UsersIcon,
  },
  {
    title: "Configuraciones",
    url: "/dashbord/configuraciones",
    icon: SettingsIcon,
  },
]