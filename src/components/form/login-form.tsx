"use client";

import { authenticate } from '@/actions';
import { TextInput } from '@/components';
import { useActionState } from 'react';


export const LoginForm = () => {

    const [state, dispatch] = useActionState(authenticate, undefined)

    return (
        <div className=''>
                    <form action={dispatch}>
                        <div className='flex flex-col gap-4'>
                            <TextInput label='Correo electronico' name='email' type='email' />
                            <TextInput label='Contraseña' name='password' type='password' />
                        </div>
                        {
                            state === "Invalid credentials." && (
                                <>
                                    <p className='text-red-500'>Credenciales invalidas.</p>
                                </>
                            )
                        }
                        <div className='w-full'>
                            <button type="submit" className='mt-6 w-full cursor-pointer border-secondary bg-secondary border-2 text-background rounded-lg py-2 px-4'>
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
        </div>
    )
}