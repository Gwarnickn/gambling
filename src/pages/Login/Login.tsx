import React from "react";
import './login.scss';
import { ReactComponent as ArrowDown} from "../../assets/arrow-down.svg";
import { ReactComponent as LogoIcon } from '../../assets/logo/logo-icon.svg';
import { FormInput } from "../../components/Form/FormInput";
import Button from "../../components/Button/Button";
import { Checkbox } from "../../components/Form/Common/Checkbox/Checkbox";
import { NavLink } from "react-router-dom";
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { ReactComponent as PasswordIcon } from '../../assets/password.svg';

const Login = () => {

    return(
        <div className="log-in-page">
            <div className="log-in-wrapper">
                <div className="log-in">
                    <NavLink to="about" className="nav-link"><div className="log-in-logo">
                        <LogoIcon/>
                        <div className="log-in-logo-text">ComfyCoiner</div>
                    </div></NavLink>
                    <div className="log-in-header">Log in</div>
                    <div className="">Log in and embark on an amazing journey with the comfiest clicker and a graceful experience.</div>
                    <form className="log-in-form" action="#" >
                        <div className="svg-with-input">
                            <UserIcon/>
                            <FormInput name="email" type="email" placeholder="e-mail" required/>
                        </div>
                        <div className="svg-with-input">
                            <PasswordIcon/>
                            <FormInput name="password" type="password" placeholder="password" required/>
                        </div>
                        <div className="form-row">
                            <Checkbox name="XD">Remember me</Checkbox>
                            <NavLink to="password-reset" className="nav-link"><Button className="btn-invisible">Forgot password?</Button></NavLink>
                        </div>
                        <Button type="submit" className="btn-primary">Log in</Button>
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
export default Login;