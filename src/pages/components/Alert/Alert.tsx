import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

type AlertPropsType = {
  type: 'success' | 'error';
  description: string;
};

const AlertComponent = ({
  type = 'success',
  description = ''
}: AlertPropsType) => {
  const titleToDisplay = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <Alert severity={type}>
      <AlertTitle>{titleToDisplay}</AlertTitle>
      {description}
    </Alert>
  );
};

export default AlertComponent;
