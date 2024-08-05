'use client';

import { useState } from 'react';

export default function ReusableForm({ fields, onSubmit, nameButton, widthForm }) {
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={widthForm}>
            {fields.map((field) => (
                <div key={field.name} className="flex flex-col mb-[15px]">
                    <label htmlFor={field.name} className="text-[14px] font-medium mb-[5px] w-full">
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="border-[1px] border-[#ededed] px-[10px] text-[13px] leading-[20px] h-[40px] w-full"
                    />
                </div>
            ))}
            <button
                type="submit"
                className="border-[1px] border-[#EDEDED] h-[50px] w-full flex justify-center items-center text-[16px] bg-[#172983] text-[#ffffff] hover:bg-[#2F3C92] hover:text-[#ffffff]"
            >
                {nameButton}
            </button>
        </form>
    );
}
