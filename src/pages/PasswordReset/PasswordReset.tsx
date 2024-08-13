import React from "react";
import './password-reset.scss';
import { ReactComponent as ArrowDown} from "../../assets/arrow-down.svg";
import { ReactComponent as LogoIcon } from '../../assets/logo/logo-icon.svg';
import { FormInput } from "../../components/Form/FormInput";
import Button from "../../components/Button/Button";
import { Checkbox } from "../../components/Form/Common/Checkbox/Checkbox";
import { NavLink } from "react-router-dom";
import { ReactComponent as EmailIcon } from '../../assets/email.svg';

const PasswordReset = () =>{

    return(
        <div className="password-reset-page">
            <div className="password-reset-wrapper">
                <div className="password-reset">
                    <div className="password-reset-logo">
                        <LogoIcon/>
                        <div className="password-reset-logo-text">ComfyClicker</div>
                    </div>
                    <div className="password-reset-header">Password reset</div>
                    <div className="">Enter the e-mail address associated with your account and we'll send you a link to reset your password.</div>
                    <form className="password-reset-form" action="#" >
                        <div className="svg-with-input">
                            <EmailIcon/>
                            <FormInput name="email" type="email" placeholder="e-mail" required/>
                        </div>
                        <Button type="submit" className="btn-primary">Continue</Button>
                    </form>
                    <div>
                        Don't have any account? 
                        <NavLink to="sign-up" className="nav-link"><span className="primary-text glow cursor-pointer"> Sign up!</span></NavLink>
                    </div>
                </div>
                <div className="go-back" onClick={() => {window.history.back()}}>
                    <ArrowDown/>
                </div>
            </div>
        </div>
    )
}
export default PasswordReset;