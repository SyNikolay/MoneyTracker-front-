import { FC } from 'react';

import { Controller, Control } from "react-hook-form";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select  from '@mui/material/Select';

interface IProps {
  name: string;
  label: string;
  control: Control<any>;
  options: string[];
  disabled?: boolean;
}

const MySelect: FC <IProps> = ({ name, control, label, options, disabled }) => {

  return (
    <Controller 
      name={name}
      control={control}
      render={({ field }) => 
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            {...field}
            label={label}
            disabled={disabled}
          >
            {options.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)}
          </Select>
        </FormControl>
      }
    />
  );
}

export default MySelect;