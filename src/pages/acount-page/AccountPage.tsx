import { useState } from "react";
import { Navigate } from 'react-router';

import { useUser } from '../../store/UserStore';

import AccountInfo from './components/AccountInfo';
// import AccountIncome from './components/AccountIncome';
import MyModal from '../../components/MyModal';
import AccountEditForm from "./components/AccountEditForm";

import styles from './AccountPage.module.scss';

const AccountPage = () => {
  const user = useUser();

  const [open, setOpen] = useState(false);

  if (user.isAuth === false) {
    return <Navigate to={'/auth'} />;
  }

  return (
    <div className={styles.AccountPage}>
      <div className={styles.AccountPage__header}>
        <h2 className={styles.AccountPage__title}>Личный кабинет</h2>
      </div>
      <MyModal open={open} handleClose={() => setOpen(false)}>
        <AccountEditForm handleClose={() => setOpen(false)}/>
      </MyModal>
      <div className={styles.AccountPage__content}>
        <AccountInfo setOpen={() => setOpen(true)}/>
        {/* <AccountIncome /> */}
      </div>
    </div>
  );
};

export default AccountPage;
