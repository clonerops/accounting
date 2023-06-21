import Select from "react-select";

interface SelectProps {
    options: { value: string; label: string }[];
    onChange: (selectedOption: { value: string; label: string } | null) => void;
    defaultValue?: { value: string; label: string };
    placeholder?: string;
    autoFocus?: boolean
    title?: string
}

const CustomSelect: React.FC<SelectProps> = ({
    options,
    onChange,
    defaultValue,
    autoFocus,
    placeholder,
    title
}) => {
    return (
        <div
            style={{
                minWidth: "19.3vw",
                gap: 8,
            }}
        >
            <label className="dropdown__label">{title}</label>
            <Select
                options={options}
                onChange={onChange}
                defaultValue={defaultValue}
                placeholder={placeholder}
                autoFocus={autoFocus}
            />
        </div>
    );
};

export default CustomSelect;
