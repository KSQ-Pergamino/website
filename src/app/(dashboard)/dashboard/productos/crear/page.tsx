import { ProductForm } from '@/app/(dashboard)/_components';

const pageDescription = {
    title: "Catálogo de productos",
    description: "Gestioná y organizá todos los productos de tu tienda desde un solo lugar. Agregá, editá o eliminá artículos, controlá inventario, precios, categorías y más. Mantené tu catálogo siempre actualizado para ofrecer la mejor experiencia a tus clientes.",
}


export default async function Productos() {


    return (
        <main>
            <div className='mb-4'>
                <h2 className='text-2xl font-semibold'>{pageDescription.title}</h2>
                <p>{pageDescription.description}</p>
            </div>
            <ProductForm />
        </main>
    );
};