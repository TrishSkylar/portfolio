import React, { useEffect, useState } from 'react';

/* Routes */
import Routing from './routes';

/* Data */
import en from './data/en/global.json';
import es from './data/es/global.json';

/* Language */
import {
  getLanguage,
  setLanguage
} from './translations';

/* Constants */
import {
  EN,
  ES
} from './utils/constants';

export default () => {
  const [ data, setData ] = useState(getLanguage() === EN ? en : es);

  const translate = language => {
    if(language === EN){
      setData(en);
      setLanguage(EN);
    }else{
      setData(es);
      setLanguage(ES);
    }
  }
  
  return (
    <Routing
      translate={ translate }
      data={ data }
      EN={ EN }
      ES={ ES }
    />
  );
}