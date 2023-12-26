import { Link } from 'react-router-dom';

import { BASE_URL, Routes } from '../../utils/consts';

import { useUser } from '../../store/UserStore';

import styles from './Header.module.scss';

const Header = () => {
  const user = useUser((state) => state.user);
  const isAuth = useUser((state) => state.isAuth);

  return (
    <header className={styles.Header}>
      <h1 className={styles.Header__title}>Money Tracker</h1>
      {isAuth && (
        <Link to={Routes.ACCOUNT} className={styles.Header__accountLink}>
          {user?.avatar && <img className={styles.Header__avatar} src={BASE_URL + `/${user.avatar}`} alt="" />}
        </Link>
      )}
    </header>
  );
};

export default Header;
