import React, {FunctionComponent} from "react";
import './term.scss';

type TermProps = {
    id: number,
    header: string
    content: JSX.Element;
    handleClick: () => void;
    activeTerm: number;
}
const Term: FunctionComponent<TermProps> = ({id, header, content, handleClick, activeTerm}) => {
    return(
        <div className={`term ${activeTerm === id ? "active-term" : ""}`}>
            <div className="term-header" onClick={handleClick}>{header}</div>
            <div className="term-text">{content}</div>
        </div>
    )
}
export default Term;