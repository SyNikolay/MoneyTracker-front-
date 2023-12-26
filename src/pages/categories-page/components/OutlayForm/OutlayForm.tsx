import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

import { Button } from '@mui/material';
import MyInput from '../../../../components/MyInput';
import MySelect from '../../../../components/MySelect';

import styles from './OutlayForm.module.scss';
import MyTextarea from '../../../../components/MyTextarea';
import { OutlayFormType } from '../../../../types/types';
import { useUser } from '../../../../store/UserStore';
import { getCategory } from '../../../../api/outlaysApi';

const OutlayForm = () => {
  const [open, setOpen] = useState(0);
  const userId = useUser((state) => state.user?.id);
  const setUser = useUser((state) => state.setUser)
  const fetchAllCategories = useUser((state) => state.fetchAllCategories);
  const fetchAllOutlays = useUser((state) => state.fetchAllOutlays);
  const fetchAllOptions = useUser((state) => state.fetchAllOptions);
  const selectOptions = useUser((state) => state.options);

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
      const res = await getCategory(data, userId!);
      setUser(res, true);
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
