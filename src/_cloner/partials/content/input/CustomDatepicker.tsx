import React, { FC } from 'react'
import { DatePicker } from 'zaman'

interface IProps {
    title?: string
    placeholder?: string
}

const CustomDatepicker:FC<IProps> = ({title, placeholder}) => {
    return (
        <div style={{
            minWidth: "10vw",
            gap: 8,
        }}>
            {/* <label className="dropdown__label">{title}</label> */}
            <DatePicker
                round="x4"
                inputClass='input'
                onChange={(d) => console.log(d)}
                inputAttributes={{
                    placeholder: placeholder
                }}
            />
        </div>
    )
}

export default CustomDatepicker