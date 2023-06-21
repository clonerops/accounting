import { FC } from 'react'

interface IProps {
    title?: string
    name?: string
    key?: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const CustomInput: FC<IProps> = ({title, value, name, key, onChange}) => {
    return (
        <div
            style={{
                minWidth: "20vw",
                gap: 8,
            }}
        >
            <label className="dropdown__label">{title}</label>
            <input 
                className='input'
                name={name}
                key={key}
                value={value}
                onChange={onChange}

            />
        </div>
    );
};

export default CustomInput;
