import React, {FunctionComponent} from "react";
import './homepage.scss';
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
type homepageProps = {};

const Homepage: FunctionComponent<homepageProps> = ({}) => {
    return(
        <div className="homepage">
            <Navbar/>
        </div>
    )
}
export default Homepage