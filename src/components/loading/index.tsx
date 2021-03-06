import React, { FC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading: FC = () => {
  return (
    <div
      className='loading'
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
