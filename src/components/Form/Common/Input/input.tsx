import React from "react";
import './input.scss';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement> & {
    name: string;
};

const Input:React.FunctionComponent<InputProps> = ({className, name, id, placeholder, required, type}) => {

    return(
        <input
            id={id || name}
            className={`form-input ${className}`}
            name={name}
            placeholder={placeholder}
            required={required}
            type={type}
        />
    )
}
export default Input;