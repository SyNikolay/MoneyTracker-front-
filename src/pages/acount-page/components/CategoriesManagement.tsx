import { FC, useEffect } from 'react';

import styles from './CategoriesManagement.module.scss';
import { deleteCategory } from '../../../api/outlaysApi';
import { useUser } from '../../../store/UserStore';

const CategoriesManagement = () => {
  const userId = useUser(state => state.user?.id)
  const categories = useUser(state => state.categories)
  const setCategories = useUser(state => state.setCategories)

  const onDeleteCategory = async (category: string) => {
    const res = await deleteCategory(category, userId!)
    setCategories(res);
  }

  useEffect(() => {
    console.log(categories);
  },[categories])

  return (
    <div className={styles.CategoriesManagement}>
      {!!categories.length && categories.map((category) => {
        return (
          <div>
            {category.name}
            <button onClick={() => onDeleteCategory(category.name)}>delete</button>
          </div>
        )
      })}
    </div>
  );
};

export default CategoriesManagement;