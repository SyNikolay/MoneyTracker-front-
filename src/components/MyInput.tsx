import { FC } from 'react';

import { Controller, Control } from 'react-hook-form';
import { TextField } from '@mui/material';

interface IProps {
  name: string;
  label: string;
  type?: string;
  control: Control<any>;
  className?: string;
}

const MyInput: FC<IProps> = ({ name, control, label, type = 'text', className }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField {...field} label={label} variant="outlined" type={type} className={className} />
      )}
    />
  );
};

export default MyInput;
