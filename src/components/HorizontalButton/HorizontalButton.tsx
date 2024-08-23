import React, { FunctionComponent } from "react";
import { ReactComponent as Arrow} from "../../assets/arrow-down.svg";
import { NavLink } from "react-router-dom";
import './horizontal-button.scss';
type horizontalButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> & {
    up?: boolean;
    to: string;
};

const HorizontalButton:FunctionComponent<horizontalButtonProps> = ({up, to, children,}) =>{
    return(
        <NavLink to={to} className="nav-link"><div className="horizontal-btn">
            <div className={`arrow ${up ? "up" : ""}`}>
                <Arrow/>
            </div>
            <div className="horizontal-btn-text">{children}</div>
            <div className={`arrow ${up ? "up" : ""}`}>
                <Arrow/>
            </div>
        </div></NavLink>
    )
}
export default HorizontalButton;