import { FC } from "react";

interface IProps {
    title?: string;
    name?: string;
    key?: string;
    value?: string;
    placeholder?: string;
    isCreateCustomer?: boolean
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const CustomInput: FC<IProps> = ({
    title,
    value,
    name,
    key,
    placeholder,
    isCreateCustomer,
    onChange,
}) => {
    return (
        <>
            {isCreateCustomer ? (
                <div
                    style={{
                        maxWidth: "20vw",
                        gap: 8,
                    }}
                >
                    <label className="dropdown__label">{title}</label>
                    <input
                        className="input"
                        name={name}
                        key={key}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            ) : (
                <div
                    style={{
                        maxWidth: "12vw",
                        gap: 8,
                    }}
                >
                    {/* <label className="dropdown__label">{title}</label> */}
                    <input
                        className="input"
                        name={name}
                        key={key}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                </div>
            )}
        </>
    );
};

export default CustomInput;
