import { useState, useEffect } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

import { BASE_URL } from '../../../../utils/consts';
import { Button } from '@mui/material';
import MyInput from '../../../../components/MyInput';
import MySelect from '../../../../components/MySelect';
import { useUser } from '../../../../store/UserStore';

import styles from './OutlayForm.module.scss';
import MyTextarea from '../../../../components/MyTextarea';
import { OutlayFormType } from '../../../../types/types';

const OutlayForm = () => {
  const [open, setOpen] = useState(0);
  const fetchAllCategories = useUser(state => state.fetchAllCategories);
  const fetchAllOutlays = useUser(state => state.fetchAllOutlays);
  const fetchAllOptions = useUser(state => state.fetchAllOptions);
  const selectOptions = useUser(state => state.options)

  const { control, handleSubmit, reset, formState } = useForm<OutlayFormType>({
    defaultValues: {
      name: '',
      balance: '',
      comment: '',
    }
  });

  useEffect(() => {
    fetchAllOptions();
    fetchAllOutlays();
  },[fetchAllOptions, fetchAllOutlays])

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', balance: '' });
    }
  },[reset, formState])
  
  const onSubmit = async (data: OutlayFormType) => {
    try {
      await axios.post( BASE_URL + '/categories/create', data);
    } catch (error) {
      console.log(error);
    } finally {
      fetchAllCategories();
      fetchAllOptions();
      fetchAllOutlays();
    }
  };

  return (
    <div className={styles.OutlayBlock}>
      <div className={styles.ToggleFormButtonContainer}>
        <button className={ classNames(styles.ToggleFormButton, {[styles.ToggleFormButton__Active] : open === 0})} onClick={() => setOpen(0)}>Выбор категории</button>
        <button className={ classNames(styles.ToggleFormButton, {[styles.ToggleFormButton__Active] : open === 1})} onClick={() => setOpen(1)}>Новая категория</button>
      </div>
      <form className={styles.OutlayForm} onSubmit={handleSubmit(onSubmit)}>
        {open === 0
          ? <MySelect label={selectOptions.length === 0 ? 'Нет категорий' : 'Выберите категорию'} name='name' control={control} options={selectOptions} disabled={selectOptions.length === 0}/>
          : <MyInput label='Новая категория' name='name' control={control} />
        }
        <MyInput label='Сумма' type="number" name='balance' control={control} />
        <MyTextarea  label='Комментарий' name='comment' control={control} />
        <Button className={styles.Button} type='submit' variant='contained'>Сохранить</Button>
      </form>
    </div>
  );
}

export default OutlayForm;