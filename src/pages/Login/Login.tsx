import React, {useContext} from "react";
import './login.scss';
import PageFocus from "../../contexts/PageFocus";
import { ReactComponent as ArrowDown} from "../../assets/arrow-down.svg";

const Login = () => {

    const {pageFocus, setPageFocus} = useContext(PageFocus);

    return(
        <div className="login-page">
            <div className="login-wrapper">
                <div className="login">
                    Login
                </div>
                <div className="go-back" onClick={() => {setPageFocus("homepage")}}>
                    <ArrowDown/>
                </div>
            </div>
        </div>
    )
}
export default Login;