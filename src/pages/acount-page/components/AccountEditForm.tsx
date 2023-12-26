import { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useUser } from '../../../store/UserStore';
import { update } from '../../../api/userApi';

import MyInput from '../../../components/MyInput';
import { Button } from '@mui/material';

import styles from "./AccountEditForm.module.scss";

interface IProps {
  handleClose: () => void;
}

const AccountEditForm: FC<IProps> = ({ handleClose }) => {
  const user = useUser();
  const [fileState, setFileState] = useState<any>({})
  const { register, control, watch } = useForm();

  const name = watch('name');
  const surname = watch('surname');
  const avatar = watch('avatar');
  const work = watch('work');
  const salary = watch('salary');

  const onSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append('id', `${user.user?.id}`);
      formData.append('avatar', avatar[0]);
      formData.append('name', name);
      formData.append('surname', surname);
      formData.append('work', work);
      formData.append('salary', salary);

      const res = await update(formData);
      user.setUser(res, true);
      handleClose();
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    console.log('0' in fileState);
  },[fileState])

  return (
    <div className={styles.EditForm}>
      <h3 className={styles.EditForm__title}>Редактирование аккаунта</h3>
      <div className={styles.EditForm__fields}>
        <MyInput className={styles.EditForm__field} label="Имя" control={control} name="name" />
        <MyInput className={styles.EditForm__field} label="Фамилия" control={control} name="surname" />
        <MyInput className={styles.EditForm__field} label="Место работы" control={control} name="work" />
        <MyInput className={styles.EditForm__field} label="Ежемесячный доход" control={control} name="salary" />
        <label className={styles.input_file}>
            <input type="file" {...register('avatar', { required: false })} onChange={e => setFileState(e.target.files)}/>
            <span>{'0' in fileState ? fileState[0].name : 'Выберите фото'}</span>
        </label>
      </div>
      <Button className={styles.EditForm__button} variant='contained' onClick={() => onSubmit()}>Сохранить</Button>
    </div>
  );
};

export default AccountEditForm;