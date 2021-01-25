import React from 'react';
import { YEAR } from '../../utils/constants';
import './Footer.css';

export default props => {
  const { data } = props;
  return (
    <footer className="footer flex-container">
      <p>&copy; { YEAR } Derry Nikolai Sucari Aduviri - { data.copy }</p>
    </footer>
  );
}