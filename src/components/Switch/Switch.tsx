import React, { FunctionComponent, useState } from "react";
import './switch.scss';

type SwitchProps = {
    defaultValue?: boolean,
    handleChange: (value: boolean) => void;
}

const Switch:FunctionComponent<SwitchProps> = ({defaultValue, handleChange}) => {
    const [switchValue, setSwitchValue] = useState(defaultValue || false);
    
    const switchSwitched = () => {
        setSwitchValue(!switchValue);
        handleChange(!switchValue);
    }

    return(
        <div className={`switch ${switchValue ? "switched" : ""}`} onClick={switchSwitched}>
            <div className="switch-circle"/>
        </div>
    )
}
export default Switch