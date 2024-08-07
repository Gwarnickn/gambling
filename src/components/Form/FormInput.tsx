import React from "react";
import Input from "./Common/Input/input";
import FormLabelWrapper from "./FormLabelWrapper/FormLabelWrapper";

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement> & {
    name: string;
    label?: string;
    value?: any;
    type?: string;
};

export const FormInput: React.FunctionComponent<Props> = (
    {
        id,
        name,
        value,
        label,
        className,
        required,
        type,
        ...props
    }) => {
    if (label) {
        return (
            <FormLabelWrapper label={label} id={id} required={required} className={className}>
                <Input name={name} id={id} value={value} required={required} type={type} {...props}/>
            </FormLabelWrapper>
        )

    } else {
        return (
            <Input name={name} id={id} value={value} required={required} type={type} {...props}/>
        );
    }
};