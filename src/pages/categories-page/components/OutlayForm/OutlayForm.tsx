import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

import { BASE_URL } from '../../../../utils/consts';
import { Button } from '@mui/material';
import MyInput from '../../../../components/MyInput';
import MySelect from '../../../../components/MySelect';
import { useMain } from '../../../../store/MainStore';

import styles from './OutlayForm.module.scss';
import MyTextarea from '../../../../components/MyTextarea';
import { OutlayFormType } from '../../../../types/types';
import { useUser } from '../../../../store/UserStore';

const OutlayForm = () => {
  const [open, setOpen] = useState(0);
  const userId = useUser((state) => state.user?.id);
  const fetchAllCategories = useMain((state) => state.fetchAllCategories);
  const fetchAllOutlays = useMain((state) => state.fetchAllOutlays);
  const fetchAllOptions = useMain((state) => state.fetchAllOptions);
  const selectOptions = useMain((state) => state.options);

  useEffect(() => {
    console.log(selectOptions);
  }, [selectOptions]);

  const { control, handleSubmit, reset, formState } = useForm<OutlayFormType>({
    defaultValues: {
      name: '',
      balance: '',
      comment: '',
    },
  });

  useEffect(() => {
    fetchAllOptions(userId);
    fetchAllOutlays(userId);
  }, [fetchAllOptions, fetchAllOutlays, userId]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', balance: '' });
    }
  }, [reset, formState]);

  const onSubmit = async (data: OutlayFormType) => {
    try {
      await axios.post(BASE_URL + '/categories/create', { ...data, userId });
    } catch (error) {
      console.log(error);
    } finally {
      fetchAllCategories(userId);
      fetchAllOptions(userId);
      fetchAllOutlays(userId);
    }
  };

  return (
    <div className={styles.OutlayBlock}>
      <div className={styles.ToggleFormButtonContainer}>
        <button
          className={classNames(styles.ToggleFormButton, { [styles.ToggleFormButton__Active]: open === 0 })}
          onClick={() => setOpen(0)}
        >
          Выбор категории
        </button>
        <button
          className={classNames(styles.ToggleFormButton, { [styles.ToggleFormButton__Active]: open === 1 })}
          onClick={() => setOpen(1)}
        >
          Новая категория
        </button>
      </div>
      <form className={styles.OutlayForm} onSubmit={handleSubmit(onSubmit)}>
        {open === 0 ? (
          <MySelect
            label={!selectOptions.length ? 'Нет категорий' : 'Выберите категорию'}
            name="name"
            control={control}
            options={selectOptions}
            disabled={selectOptions.length === 0}
          />
        ) : (
          <MyInput label="Новая категория" name="name" control={control} />
        )}
        <MyInput label="Сумма" type="number" name="balance" control={control} />
        <MyTextarea label="Комментарий" name="comment" control={control} />
        <Button className={styles.Button} type="submit" variant="contained">
          Сохранить
        </Button>
      </form>
    </div>
  );
};

export default OutlayForm;
