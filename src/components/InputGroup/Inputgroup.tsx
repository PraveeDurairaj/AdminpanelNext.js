import React from 'react';
import { InputData } from '@/helper/type';
import { Input } from '../ui/input';


const Inputgroup = ({ label, id, type, value, placeholder, readOnly, name, labelItem, onChangeFunction }: InputData) => {
    return (
        <div>
            {label && <label htmlFor={id} className="mb-1.5 flex gap-2 items-center text-[16px] font-[500]">
                <span>{label}</span>
                {labelItem && <span>{labelItem}</span>}
            </label>}
            <Input
                id={id}
                type={type}
                value={value ?? ''}
                onChange={onChangeFunction}
                placeholder={placeholder}
                readOnly={readOnly}
                name={name}
            />
        </div>
    )
}

export default Inputgroup

