import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import classNames from 'classnames';

import { login, registration } from 'api';

import MyInput from '../../components/MyInput';
import { Button } from '@mui/material';

import { useUser } from '../../store/UserStore';

import { EnterType } from './AuthPage.type';
import { User } from 'types';

import { authPageValidationSchema, validationFieldsList } from './utils';
import { useYupValidationResolver } from 'hooks/useYupValidationResolver';
import { WarningMessage } from 'components/ui';

import styles from './AuthPage.module.scss';

const AuthPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<EnterType>(EnterType.Authorization);
  const [requiredFields, setRequiredFields] = useState('');

  const setUser = useUser((state) => state.setUser);
  const fetchAllOptions = useUser((state) => state.fetchAllOptions);

  const resolver = useYupValidationResolver(authPageValidationSchema);
  const { control, reset, watch, handleSubmit, ...formMethods } = useForm<User>({
    resolver,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    setRequiredFields('');
    const errorsList = Object.keys(formMethods.formState.errors);
    console.log(formMethods.formState);

    if (errorsList.length) {
      errorsList.forEach((el) => {
          setRequiredFields((prev) => prev + validationFieldsList[el] + ', ');
      });
    }
  }, [formMethods.formState]);

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const res =
        open === EnterType.Registration
          ? await registration(data.email, data.password)
          : await login(data.email, data.password);
      setUser(res, true);
      fetchAllOptions(res.id);
      reset();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.AuthPage}>
      <div className={styles.ToggleFormButtonContainer}>
        <button
          className={classNames(styles.ToggleFormButton, {
            [styles.ToggleFormButton__Active]: open === EnterType.Registration,
          })}
          onClick={() => setOpen(EnterType.Registration)}
        >
          Регистрация
        </button>
        <button
          className={classNames(styles.ToggleFormButton, {
            [styles.ToggleFormButton__Active]: open === EnterType.Authorization,
          })}
          onClick={() => setOpen(EnterType.Authorization)}
        >
          Авторизация
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.AuthForm}>
        <MyInput label="E-mail" name="email" type="email" control={control} />
        <MyInput label="Пароль" name="password" type="password" control={control} />
        <Button className={styles.Button} type="submit" variant="contained">
          {open === EnterType.Registration ? 'Регистрация' : 'Авторизация'}
        </Button>
      </form>
      {requiredFields &&
        <WarningMessage
          className={styles.ErrorMessage}
          type="error"
        >{`Необходимо заполнить обязательные поля: ${requiredFields}`}</WarningMessage>
      }
    </div>
  );
};

export default AuthPage;
