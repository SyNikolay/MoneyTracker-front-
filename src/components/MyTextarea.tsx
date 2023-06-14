import { FC } from 'react';

import { Controller, Control } from "react-hook-form";
import { TextField } from '@mui/material';

interface IProps {
  name: string;
  label: string;
  control: Control<any>;
  className?: string;
}

const MyTextarea: FC <IProps> = ({ name, control, label, className }) => {
  return (
    <Controller 
      name={name}
      control={control}
      render={({ field }) => 
        <TextField 
          {...field}
          label={label}
          variant='outlined'
          multiline
          rows={3}
          className={className}
        />
      }
    />
  );
}

export default MyTextarea;