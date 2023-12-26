import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import { useUser } from '../../../store/UserStore';

import { BASE_URL } from '../../../utils/consts';

import styles from './AccountInfo.module.scss';
import CategoriesManagement from './CategoriesManagement';

interface IAccountInfo {
  setOpen: () => void
}

const AccountInfo: FC<IAccountInfo> = ({setOpen}) => {
  const user = useUser();
  const setUser = useUser((state) => state.setUser);
  const setReset = useUser((state) => state.setReset);
  const navigate = useNavigate();
  const categories = useUser((state) => state.categories);
  const outlays = useUser((state) => state.fullOutlay);
  const fetchAllCategories = useUser((state) => state.fetchAllCategories);
  const setOutlay = useUser((state) => state.setOutlay);

  useEffect(() => {
    fetchAllCategories(user.user?.id);
  }, [fetchAllCategories, user.user?.id]);

  useEffect(() => {
    if (categories.length > 0) {
      let outlays = 0;
      categories.forEach((el) => {
        return (outlays += el.balance);
      });
      setOutlay(outlays);
    }
  }, [categories, setOutlay]);

  const getRole = (role: string) => {
    if (role === 'ADMIN') return 'Администратор';
    if (role === 'USER') return 'Пользователь';
  };

  const exit = () => {
    localStorage.setItem('token', '');
    setUser(null, false);
    setReset();
    navigate('/auth');
  };

  return (
    <div className={styles.AccountInfo}>
      <div className={styles.AccountInfo__block1}>
        <div className={styles.AccountInfo__avatar}>
          <img src={user.user?.avatar ? BASE_URL + '/' + user.user?.avatar : `/img/team-placeholder.png`} alt="" />
        </div>

        <div className={styles.AccountInfo__info}>
          <h3 className={styles.AccountInfo__infoTitle}>{user.user?.name && user.user?.surname ? `${user.user?.name} ${user.user?.surname}` : 'Неизвестный пользователь'}</h3>

          <div className={styles.AccountInfo__infoRow}>
            <span>E-mail</span>
            <span>{user.user?.email}</span>
          </div>
          <div className={styles.AccountInfo__infoRow}>
            <span>Роль</span>
            <span>{getRole(user.user?.role!)}</span>
          </div>
          <div className={styles.AccountInfo__infoRow}>
            <span>Общая сумма расходов</span>
            <span>{outlays} руб.</span>
          </div>
          <div className={styles.AccountInfo__infoRow}>
            <span>Текущий баланс</span>
            <span>{user.user?.ballance} руб.</span>
          </div>
          <div className={styles.AccountInfo__infoRow}>
            <span>Место работы</span>
            <span>{user.user?.work}</span>
          </div>
          <div className={styles.AccountInfo__infoRow}>
            <span>Ежемесячный доход</span>
            <span>{user.user?.salary} руб.</span>
          </div>

        </div>
      </div>
      <div className={styles.AccountInfo__block2}>
        <Button sx={{marginBottom: '10px'}} variant="outlined" onClick={() => setOpen()}>Редактировать аккаунт</Button>
        {user.isAuth && <Button variant="outlined" onClick={() => exit()}>Выйти из аккаунта</Button>}
      </div>
      {!!categories.length && (
        <div className={styles.AccountInfo__block3}>
          <CategoriesManagement />
        </div>
      )}
    </div>
  );
};

export default AccountInfo;
