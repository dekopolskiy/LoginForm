import React from 'react';
import { StateType } from "../redux/store"
import { connect } from 'react-redux';
import styles from "./Login.module.css";

type PropsType = {
    email: string,
}
const Login: React.FC<PropsType> = (props) => {
    return (
        <>
            {props.email}
            <div className={styles.login}>
                <form className={styles.login__form}>
                    <h2>Sign Up Form</h2>
                    <input type='email' className={styles.form__item} placeholder='Email' />
                    <input type='password' className={styles.form__item} placeholder='Password' />
                    <label><input type='checkbox' />Remember me</label>
                    <button type="button" className={styles.form__button}>SIGN IN</button>
                    <div>Don`t have an account? <b>Login Now!</b></div>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = (state: StateType) => {
    return {
        email: state.login_reducer.email
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        sign_in: () => {
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
