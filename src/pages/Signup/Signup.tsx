import React from "react";
import './signup.scss';
import { ReactComponent as ArrowDown} from "../../assets/arrow-down.svg";
import { ReactComponent as LogoIcon } from '../../assets/logo/logo-icon.svg';
import { FormInput } from "../../components/Form/FormInput";
import Button from "../../components/Button/Button";
import { Checkbox } from "../../components/Form/Common/Checkbox/Checkbox";
import { NavLink } from "react-router-dom";

const Signup = () =>{

    return(
        <div className="signup-page">
            <div className="signup-wrapper">
                <div className="signup">
                    <div className="signup-logo">
                        <LogoIcon/>
                        <div className="signup-logo-text">ComfyClicker</div>
                    </div>
                    <div className="signup-header">Sign up</div>
                    <div>Sign up and begin an incredible adventure with the coziest clicker and a seamless experience.</div>
                    <div className="signup-form">
                        <FormInput name="username" type="text" placeholder="username" required/>
                        <FormInput name="email" type="email" placeholder="e-mail" required/>
                        <FormInput name="password" type="password" placeholder="password" required/>
                        <FormInput name="repeated-password" type="password" placeholder="confirm password" required/>
                        <Button className="btn-primary">Sign up</Button>
                    </div>
                    <div>
                        Already have an account?
                        <NavLink to="log-in" className="nav-link"><span className="primary-text glow cursor-pointer"> Log in!</span></NavLink>
                    </div>
                </div>
                <div className="go-back" onClick={() => {window.history.back()}}>
                    <ArrowDown/>
                </div>
            </div>
        </div>
    )
}
export default Signup;