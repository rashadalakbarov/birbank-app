import React from 'react'

import { Button } from '@mui/material';

interface SubmitButtonProps {
    title: string;
    onClick: () => void;
  }

const SubmitButton = ({onClick, title}:SubmitButtonProps) => {
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={onClick}
      className="mt-2"
      type="submit"
    >
      {title}
    </Button>
  )
}

export default SubmitButton