import React, {FunctionComponent} from "react";
import './button.scss';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> & {
    href?: string
};

const Button: FunctionComponent<ButtonProps> = ({children,...props}) => {
    if (props.href) {
        return (
            <a href={props.href} className="btn btn-primary">
                {children}
            </a>
        );
    } else {
        return (
            <button  className="btn btn-primary" type="button" {...props}>
                {children}
            </button>
        );
    }
}
export default Button;