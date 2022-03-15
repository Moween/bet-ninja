import React from 'react';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../utils/muiStyles';

const Text = ({ content }) => {
  const { text: displayMessage } = useStyles();

  return (
    <Typography variant="body1" component="p" className={displayMessage}>
      {content}
    </Typography>
  );
};

export default Text;
