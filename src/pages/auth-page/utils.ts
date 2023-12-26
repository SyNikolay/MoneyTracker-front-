import * as Yup from 'yup';
import { Shape, User } from 'types/types';

export const authPageValidationSchema = Yup.object<Shape<User>>({
  email: Yup.string()
    .required()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Введен некорректный e-mail'),
  password: Yup.string().required(),
});

export const validationFieldsList: { [key: string]: string } = {
  email: 'Email',
  password: 'Пароль',
};
