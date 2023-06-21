import React, { FC } from 'react'
import { DatePicker } from 'zaman'

interface IProps {
    title: string
}

const CustomDatepicker:FC<IProps> = ({title}) => {
    return (
        <div style={{
            minWidth: "20vw",
            gap: 8,
        }}>
            <label className="dropdown__label">{title}</label>
            <DatePicker
                round="x4"
                inputClass='input'
                onChange={(d) => console.log(d)}
                inputAttributes={{
                    placeholder: ""
                }}
            />
        </div>
    )
}

export default CustomDatepicker