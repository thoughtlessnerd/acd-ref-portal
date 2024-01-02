import React from 'react'


import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    register,
    required,
    errors,
}) => {
    return (
        <div className="w-full relative">

            <input
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder=" "
                type={type}
                className={`
                text-white
            peer
            w-full
            p-4
            pt-6 
            font-light 
           bg-gray-400 
            rounded-md 
            bg-clip-padding 
            backdrop-filter 
            backdrop-blur-sm 
            bg-opacity-10
            outline-none
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            pl-4
            ${errors[id] ? 'border border-rose-500' : ''}
            ${errors[id] ? 'border focus:border-rose-500' : ''}
          `}
            />
            <label
                className={`
            absolute 
            text-md
            duration-150 
            transform 
            -translate-y-3 
            top-5 
            z-10 
            origin-[0] 
            left-4
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75
            peer-focus:-translate-y-4
            ${errors[id] ? 'text-rose-500' : 'text-gray-200'}
          `}
            >
                {label}
            </label>
        </div>
    );
}

export default Input;