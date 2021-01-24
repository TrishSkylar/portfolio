import React, { useEffect, useState } from 'react';

/* Routes */
import Routing from './routes';

/* Data */
import en from './data/en/global.json';
import es from './data/es/global.json';

export default () => {
  const [ data, setData ] = useState(en);

  const translate = language => language === 'en' ? setData(en) : setData(es);
  
  return (
    <Routing
      translate={ translate }
      data={ data }
    />
  );
}