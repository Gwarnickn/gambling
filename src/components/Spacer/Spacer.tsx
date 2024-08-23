import React, {FunctionComponent} from "react";
import './spacer.scss';
type SpacerProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> & {
    position?: string
};

const Spacer:FunctionComponent<SpacerProps> = ({position,children}) =>{

    return(
        <div className={`spacer position-${position}`}>
            <div className="spacer-line spacer-left"/>
            <div className="spacer-line-header">
                {children}
            </div>
            <div className="spacer-line spacer-right"/>
        </div>
    )
}
export default Spacer;