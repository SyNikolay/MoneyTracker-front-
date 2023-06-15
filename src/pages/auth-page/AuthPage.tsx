import { useState } from 'react';
import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import MyInput from '../../components/MyInput';
import { Button } from '@mui/material';

import { UserAuth } from '../../types/types';

import { useUser } from '../../store/UserStore';

import { login, registration } from '../../api/userApi';

import styles from './AuthPage.module.scss';

const AuthPage = () => {
  const [open, setOpen] = useState(1);
  const setUser = useUser((state) => state.setUser);
  const navigate = useNavigate();

  const { control, reset, watch } = useForm<UserAuth>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const email = watch('email');
  const password = watch('password');

  const sign = async () => {
    try {
      const res = open === 0 ? await registration(email, password) : await login(email, password);
      setUser(res, true);
      reset();
      navigate('/categories');
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.AuthPage}>
      <div className={styles.ToggleFormButtonContainer}>
        <button
          className={classNames(styles.ToggleFormButton, { [styles.ToggleFormButton__Active]: open === 0 })}
          onClick={() => setOpen(0)}
        >
          Регистрация
        </button>
        <button
          className={classNames(styles.ToggleFormButton, { [styles.ToggleFormButton__Active]: open === 1 })}
          onClick={() => setOpen(1)}
        >
          Авторизация
        </button>
      </div>
      <form className={styles.AuthForm}>
        <MyInput label="E-mail" name="email" type="email" control={control} />
        <MyInput label="Пароль" name="password" type="password" control={control} />
        <Button className={styles.Button} type="button" onClick={() => sign()} variant="contained">
          {open === 0 ? 'Регистрация' : 'Авторизация'}
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;
