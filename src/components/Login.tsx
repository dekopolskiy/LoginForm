import React from 'react';
import styles from "./Login.module.css";

type PropsType = {

}
const Login: React.FC<PropsType> = (props) => {
    return (
        <>
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

export default Login;
