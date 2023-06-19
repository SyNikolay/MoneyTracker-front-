import { useState } from 'react';

import { check, setBallance } from '../../../api/userApi';
import { useUser } from '../../../store/UserStore';

import { Button } from '@mui/material';

import styles from './AccountIncome.module.scss';

interface ICalculatorButtons {
  text: string;
  func: (val: string) => string;
}

const AccountIncome = () => {
  const user = useUser();
  const [value, setValue] = useState('');

  async function ballance() {
    try {
      await setBallance(user.user?.id!, +value, '+');
      const res = await check(user.user?.id!);
      user.setUser(res, true);
      setValue('');
    } catch (error) {
      console.error(error);
    }
  }

  const CALCULATOR_BUTTONS: ICalculatorButtons[] = [
    {
      text: '1',
      func: (val: string) => val + '1',
    },
    {
      text: '2',
      func: (val: string) => val + '2',
    },
    {
      text: '3',
      func: (val: string) => val + '3',
    },
    {
      text: '4',
      func: (val: string) => val + '4',
    },
    {
      text: '5',
      func: (val: string) => val + '5',
    },
    {
      text: '6',
      func: (val: string) => val + '6',
    },
    {
      text: '7',
      func: (val: string) => val + '7',
    },
    {
      text: '8',
      func: (val: string) => val + '8',
    },
    {
      text: '9',
      func: (val: string) => val + '9',
    },
    {
      text: '.',
      func: (val: string) => val + '.',
    },
    {
      text: '0',
      func: (val: string) => val + '0',
    },
    {
      text: 'del',
      func: (val: string) => val.slice(0, val.length - 1),
    },
  ];

  return (
    <div className={styles.AccountIncome}>
      <div className={styles.AccountIncome__calculator}>
        <div className={styles.AccountIncome__display}>{value}</div>
        <div className={styles.AccountIncome__buttons}>
          {CALCULATOR_BUTTONS.map((el) => (
            <div className={styles.AccountIncome__button} onClick={() => setValue((prev) => el.func(prev))}>
              {el.text}
            </div>
          ))}
        </div>
      </div>
      <Button className={styles.AccountIncome__saveButton} onClick={() => ballance()} variant="contained">
        Сохранить
      </Button>
    </div>
  );
};

export default AccountIncome;
