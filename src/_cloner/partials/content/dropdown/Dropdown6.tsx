import { useState } from "react";
import Select from "react-select";

interface SelectProps {
    options: { value: string; label: string, type?: string }[];
    onChange: (selectedOption: { value: string; label: string; } | null) => void;
    defaultValue?: { value: string; label: string; };
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

    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event: any) => {
        if (event.key === ' ' && !inputValue) {
            event.preventDefault(); // Prevent space from being entered in the search input
            setInputValue(' '); // Set the search input value to a space
        }
    };
    const handleInputChange = (value: any) => {
        setInputValue(value);
    };

    const customFilterOption = (option: any, rawInput: any) => {
        const inputValue = rawInput.trim().toLowerCase();
        const inputCharacters = inputValue.split('');

        return inputCharacters.every((char: any) => {
            return option.label.toLowerCase().includes(char);
        });
    };


    return (
        <div
            style={{
                minWidth: "12vw",
                gap: 8,
            }}
        >
            {/* <label className="dropdown__label">{title}</label> */}
            <Select
                options={options}
                onChange={onChange}
                defaultValue={defaultValue}
                placeholder={placeholder}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                autoFocus={autoFocus}
                onKeyDown={handleKeyDown}
                filterOption={customFilterOption}
                isSearchable
            />
        </div>
    );
};

export default CustomSelect;
