import { ErrorMessage, Field } from 'formik'

interface TextInputProps {
    name: string
    label: string
    type?: string
}

export const TextInput = ({label, name, type = 'text'}: TextInputProps) => {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={name} className='font-bold'>{label}</label>
            <input type={type} name={name} id={name} className="border-gray-400 bg-gray-100 border rounded-xl py-2 px-4" />
        </div>
    );
};