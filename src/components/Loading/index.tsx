import './index.scss';
import React from 'react';

interface IAlertProps {
  open: boolean;
}
const Loading = ({
  open
}:IAlertProps) => {

  return (
    <div className={`g-alert ${open ? 'active' : ''}`}>
      <img
        src={require('../../static/loading.gif')}
      />
    </div>
  );
};

export default Loading;