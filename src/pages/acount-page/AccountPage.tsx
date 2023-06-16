import { Navigate } from 'react-router';
import { useUser } from '../../store/UserStore';

import AccountInfo from './components/AccountInfo';
import AccountIncome from './components/AccountIncome';

import styles from './AccountPage.module.scss';

const AccountPage = () => {
  const user = useUser();

  if (user.isAuth === false) {
    return <Navigate to={'/auth'} />;
  }

  return (
    <div className={styles.AccountPage}>
      <h3 className={styles.AccountPage__title}>Личный кабинет</h3>
      <div className={styles.AccountPage__content}>
        <AccountInfo />
        <AccountIncome />
      </div>
    </div>
  );
};

export default AccountPage;
