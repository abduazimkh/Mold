import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {Loader} from '../../components/loader/Loader';
import { auth } from '../../redux/actions/auth';
import c from './Login.module.css'
import loginImage from '../../assets/admin/login.svg';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Login = (props) => {
  const { t } = useTranslation(); 
  const { language } = useSelector(state => state.lang);
  const location = useLocation();
  const auth = useSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if(username.replace(/ /g,  "").length > 5 && password.replace(/ /g,  "").length > 8){
      props.auth("/auth/login", {username, password});
      
    }
    else{
      setMessage(language === "uz" ? "Илтимос, барча маълумотларни тўғри киритинг" :  'Пожалуйста, введите всю информацию правильно')
    }
  }

  useEffect(() => {
    if(auth.admin){
      toast.success(language === "uz" ?  "Муваффақиятли тизимга кирдингиз!" : "Вы успешно вошли в систему!")
    }
  }, [auth.admin, language])

  return auth.token ? <Redirect
      to={{
        pathname: "/admin/create",
        state: {
          from: location.pathname,
        },
      }}
    /> :  (
    <div className={c.login}>
      <div className={c.login__form}>
        <div className={c.form__panel}>
          <form onSubmit={handleAdminLogin}>
            <h1>{t("login.title")}</h1>
            <input required min="5" max="30" className={c.login__input} type="text" placeholder={t("login.username")} value={username} onChange={e => setUsername(e.target.value)} />
            <input required min="8" max="1024" className={c.login__input} type="password" placeholder={t("login.password")} value={password} onChange={e => setPassword(e.target.value)} />
            {message && <p style={{color: "red"}}>{message}</p>}
            <button style={auth?.loading ? {opacity: 0.7} : {opacity: 1}} disabled={auth?.loading} className={c.login_button}>  {auth?.loading ? <Loader/> :  t("login.title")}</button>
          </form>
        <Link className={c.link} to="/">{t("404.redirect")}</Link>

        </div>
      </div>
      <div className={c.login__preview}>
        <img src={loginImage} alt="" />
      </div>
    </div>
  )
}

export default connect (null, { auth }) (Login)
