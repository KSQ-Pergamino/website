import { LoginForm } from '@/components';

export default function Login() {
  return (
    <main className="flex items-center justify-center min-h-screen flex-col px-4 bg-primary-light">
      <div className='bg-gray-50 p-8 rounded-lg shadow-md w-full max-w-sm'>
        <h1 className='text-3xl font-bold text-primary mb-1'>Iniciar sesión</h1>
        <p className='mb-4'>Ingrese sus credenciales para acceder al panel de control.</p>
        <LoginForm />
      </div>
    </main>
  );
}