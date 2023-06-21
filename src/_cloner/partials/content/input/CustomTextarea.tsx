import { FC } from 'react'

interface IProps {
    title?: string
    name?: string
    key?: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined
}

const CustomTextarea: FC<IProps> = ({title, value, name, key, onChange}) => {
    return (
        <div
            style={{
                minWidth: "19.5vw",
                gap: 8,
            }}
        >
            <label className="dropdown__label">{title}</label>
            <textarea 
                className='input'
                name={name}
                key={key}
                value={value}
                onChange={onChange}

            />
        </div>
    );
};

export default CustomTextarea;
