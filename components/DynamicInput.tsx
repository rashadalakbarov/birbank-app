import React from 'react'

import { TextField } from '@mui/material';

interface DynamicInputProps {
    label: string;
    type: "text" | "password" | "email"; 
    error: boolean;
    helperText: string;
    value: string; 
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const DynamicInput = ({ label, type, value, onChange, error, helperText }:DynamicInputProps) => {
  return (
    <TextField
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        variant="outlined"
        fullWidth
        margin="normal"
        error={error}
        helperText={helperText}
    />
  )
}

export default DynamicInput