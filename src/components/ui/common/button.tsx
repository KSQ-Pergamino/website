import Link from 'next/link'
import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
    href: string;
}

export const Button = ({href, children}:ButtonProps) => {
  return (
    <Link href={href} className='text-xl border-background border rounded-full px-6 py-2 min-w-80 md:min-w-52 md:w-max text-center mx-auto md:mx-0'>{children}</Link>
  )
}