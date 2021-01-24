import React from 'react';
import './BasicModal.css';

export default props => {
  const {
    children,
    setShow,
    show
  } = props;
  return (
    show
      ? <div className="basic-modal page flex-container">
          <span
            className="close-basic-modal"
            onClick={ () => setShow(false) }
          >
            x
          </span>
          <div className="basic-modal-content">
            { children }
          </div>
        </div>
      : null
  );
}