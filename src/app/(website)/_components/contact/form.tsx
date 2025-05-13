"use client";

interface TextInputProps {
    name: string
    label: string
    type?: string
    placeholder?: string
}

export const TextInput = ({label, name, type = 'text', placeholder}: TextInputProps) => {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={name} className='font-bold'>{label}</label>
            <input placeholder={placeholder && placeholder} type={type} name={name} id={name} className="border-gray-400 bg-gray-100 border rounded-xl py-2 px-4" />
        </div>
    );
};

export const ContactForm = () => {
    return (
        <form action="" className='flex flex-col gap-6'>
            <h3 className='font-bold text-primary text-xl'>Envíanos un mensaje</h3>
            <TextInput label='Nombre completo' name='full-name' type='text' placeholder='Juan Perez'/>
            <TextInput label='Telefono/Celular' name='phone' type='phone' placeholder='Ingrese su número de telefono.'/>
            <TextInput label='Email' name='email' type='email' placeholder='Ingrese su correo electronico'/>

            <div className='flex flex-col gap-2'>
                <label htmlFor='message' className='font-bold'>Mensaje</label>
                <textarea placeholder='Escriba su mensaje...' name='message' id='message' className="border-gray-400 bg-gray-100 border rounded-xl py-2 px-4 min-h-48 resize-none" />
            </div>

            <button type='submit' className='cursor-pointer bg-secondary rounded-xl text-background p-4 font-semibold hover:bg-secondary-light hover:scale-95 transition-all duration-300'>
                Enviar mensaje
            </button>
        </form>
    )
}