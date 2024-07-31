import React, {FunctionComponent} from "react";
import './homepage.scss';
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import SpinningRoulette from "../../components/SpinningRoulette/SpinningRoulette";
type homepageProps = {};

const Homepage: FunctionComponent<homepageProps> = ({}) => {
    return(
        <div className="homepage">
            <Navbar/>
            <div className="header">
                <div className="header-title">Comfy clicker with stress free roulette.</div>
                <SpinningRoulette/> 
            </div>
        </div>
    )
}
export default Homepage