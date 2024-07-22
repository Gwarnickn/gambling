import React, {FunctionComponent, useEffect} from "react";
import './color-picker.scss'
import { BlockPicker } from 'react-color';
import Button from "../Button/Button";
import { useState } from "react";


const ColorPicker: FunctionComponent = () => {
    const defaultColors = ['#0074D9', '#7FDBFF', '#39CCCC', '#3D9970', '#2ECC40', '#01FF70', '#FFDC00', '#FF851B', '#FF4D00', '#FF4136', '#85144b', '#F012BE', '#B10DC9', '#111111', '#AAAAAA', '#DDDDDD', '#FFFFFF']
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const [color, setColor] = useState<string>("#ff4d00");
    const handleColorChange = (newColor: string) =>{
        setColor(newColor);
        localStorage.setItem("primary-color", newColor);
        document.documentElement.style.setProperty('--g-primary',newColor);
        document.documentElement.style.setProperty('--g-primary-op70',`${newColor}b3`);
        document.documentElement.style.setProperty('--g-primary-op50',`${newColor}80`);
        document.documentElement.style.setProperty('--g-primary-op30',`${newColor}4d`);
    }

    useEffect(() =>{
        handleColorChange(localStorage.getItem("primary-color") || "#ff4d00");
    },[])

    return(
        <div className="color-picker">
            <Button className={`btn-invisible theme-btn ${showPicker ? "picker-open" : ""}`}>
                <p onClick={() => {setShowPicker(!showPicker)}}>Theme</p>
                {showPicker &&<BlockPicker triangle="hide" color={color} onChange={(e: any) => {handleColorChange(e.hex)}} colors={defaultColors}/>}
            </Button>
            
        </div>
    )
}
export default ColorPicker;
