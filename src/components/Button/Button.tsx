import React, {FunctionComponent} from "react";
import './button.scss';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> & {
    href?: string,
    className?: string,
};

const Button: FunctionComponent<ButtonProps> = ({children, className, ...props}) => {
    if (props.href) {
        return (
            <a href={props.href} className={`btn ${className}`}>
                {children}
            </a>
        );
    } else {
        return (
            <button  className={`btn ${className}`} type="button" {...props}>
                {children}
            </button>
        );
    }
}
export default Button;