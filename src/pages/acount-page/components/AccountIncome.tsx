import { check, setBallance } from '../../../api/userApi';
import { useUser } from '../../../store/UserStore';

import styles from './AccountIncome.module.scss';

const AccountIncome = () => {
  const user = useUser();

  async function ballance() {
    try {
      await setBallance(user.user?.id!, 200, '+');
      const res = await check(user.user?.id!);
      user.setUser(res, true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={() => ballance()}>plus</button>
    </div>
  );
};

export default AccountIncome;
