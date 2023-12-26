import { Link } from 'react-router-dom';
import { Routes } from '../../utils/consts';

import styles from './NavigationMenu.module.scss';
import { useUser } from '../../store/UserStore';

const NavigationMenu = () => {
  const isAuth = useUser((state) => state.isAuth);

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
    </div>
  );
};

export default NavigationMenu;
