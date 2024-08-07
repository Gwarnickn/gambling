import React from "react";
import './checkbox.scss';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement> & {
    name: string;
};

export const Checkbox: React.FunctionComponent<Props> = ({
    name,
    id,
    children,
    className,
    ...props
}) => {
    return (
        <div className="checkbox-wrapper">
            <input type="checkbox" name={name} id={id ? id : name} {...props} />
            <div className="text">{children}</div>
        </div>
    );
};