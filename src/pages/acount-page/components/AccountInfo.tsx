import { useEffect } from 'react';

import { useMain } from '../../../store/MainStore';
import { useUser } from '../../../store/UserStore';

import styles from './AccountPage.module.scss';

const AccountInfo = () => {
  const user = useUser();
  const categories = useMain((state) => state.categories);
  const outlays = useMain((state) => state.fullOutlay);
  const fetchAllCategories = useMain((state) => state.fetchAllCategories);
  const setOutlay = useMain((state) => state.setOutlay);

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

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>E-mail:</td>
            <td>{user.user?.email}</td>
          </tr>
          <tr>
            <td>Роль</td>
            <td>{getRole(user.user?.role!)}</td>
          </tr>
          <tr>
            <td>Общая сумма расходов</td>
            <td>{outlays}</td>
          </tr>
          <tr>
            <td>Текущий баланс</td>
            <td>{user.user?.ballance}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountInfo;
