import React, {useContext} from "react";
import './login.scss';
import PageFocus from "../../contexts/PageFocus";
import { ReactComponent as ArrowDown} from "../../assets/arrow-down.svg";
import { ReactComponent as LogoIcon } from '../../assets/logo/logo-icon.svg';
import { FormInput } from "../../components/Form/FormInput";
import Button from "../../components/Button/Button";
import { Checkbox } from "../../components/Form/Common/Checkbox/Checkbox";

const Login = () => {

    const {pageFocus, setPageFocus} = useContext(PageFocus);

    return(
        <div className="login-page">
            <div className="login-wrapper">
                <div className="login">
                    <div className="login-logo">
                        <LogoIcon/>
                        <div className="login-logo-text">ComfyCliker</div>
                    </div>
                    <div className="login-header">Login</div>
                    <div className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure exercitationem obcaecati, ad autem neque velit.</div>
                    <div className="login-form">
                        <FormInput name="email" type="email" placeholder="Login" required/>
                        <FormInput name="password" type="password" placeholder="password" required/>
                        <div className="form-row">
                            <Checkbox name="XD">Remember me</Checkbox>
                            <Button className="btn-invisible">Forgot password?</Button>
                        </div>
                        <Button className="btn-primary">XD</Button>
                    </div>
                </div>
                <div className="go-back" onClick={() => {setPageFocus("homepage")}}>
                    <ArrowDown/>
                </div>
            </div>
        </div>
    )
}
export default Login;