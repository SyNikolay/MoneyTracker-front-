import { Link, useNavigate } from 'react-router-dom';
import { Routes } from '../../utils/consts';

import styles from './NavigationMenu.module.scss';
import { useUser } from '../../store/UserStore';
import { useMain } from '../../store/MainStore';

const NavigationMenu = () => {
  const setUser = useUser((state) => state.setUser);
  const setReset = useMain((state) => state.setReset);
  const isAuth = useUser((state) => state.isAuth);
  const navigate = useNavigate();

  const exit = () => {
    localStorage.setItem('token', '');
    setUser(null, false);
    setReset();
    navigate('/auth');
  };
  return (
    <div className={styles.NavigationMenu}>
      {isAuth && (
        <>
          <Link className={styles.NavigationMenu__link} to={Routes.CATEGORIES}>
            categories
          </Link>
          <Link className={styles.NavigationMenu__link} to={Routes.LIST}>
            history
          </Link>
          <Link className={styles.NavigationMenu__link} to={Routes.DIAGRAM}>
            diagram
          </Link>
        </>
      )}
      {isAuth && <button onClick={() => exit()}>exit</button>}
    </div>
  );
};

export default NavigationMenu;
