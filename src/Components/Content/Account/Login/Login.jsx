import { Formik } from 'formik';
import s from './Login.module.css'


let Login = (props) => {

    return (
        <div className={s.form}>
            <div className={s.formik}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        rememberMe: false,
                        captcha: false,
                    }}
                    validationSchema={props.validationsScheme}
                    validateOnBlur
                    onSubmit={props.login}>

                    {({ values, errors, touched, handleChange,
                        handleBlur, isValid, handleSubmit, dirty }) => (
                        <div>

                            <div className={s.field}>

                                <div
                                    className={s.label}
                                    htmlFor={'email'}>Почта</div>

                                <input
                                    type={'text'}
                                    name={'email'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} />

                                {touched.email && errors.email && <div className={s.error}>{errors.email}</div>}
                            </div>


                            <div className={s.field}>
                                <div
                                    className={s.label}
                                    htmlFor={'password'}>Пароль</div>

                                <input
                                    type={'password'}
                                    name={'password'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} />

                                {touched.password && errors.password && <div className={s.error}>{errors.password}</div>}
                            </div>

                            <div className={s.field}>

                                <div
                                    className={s.label}
                                    htmlFor={'rememberMe'}>Запомнить меня</div>


                                <input
                                    type={'checkbox'}
                                    name={'rememberMe'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.rememberMe} />

                                {touched.rememberMe && errors.rememberMe && <p>{errors.rememberMe}</p>}
                            </div>

                            <div className={s.field}>


                                <button
                                    className={s.login}
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    type={'submit'}>
                                    Отправить
                                </button>
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login;