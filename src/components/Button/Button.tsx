import React, {FunctionComponent} from "react";
import './button.scss';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> & {
    className?: string,
};

const Button: FunctionComponent<ButtonProps> = ({children, className, ...props}) => {
    return (
        <button  className={`btn ${className}`} type="button" {...props}>
            {children}
        </button>
    );
}
export default Button;