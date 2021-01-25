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
  const [ data, setData ] = useState(() => {
    const lng = getLanguage();
    if(lng){
      return lng === EN ? en : es
    }else{
      setLanguage(ES);
      return es;
    }
  });

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
      getLanguage={ getLanguage }
      data={ data }
      EN={ EN }
      ES={ ES }
    />
  );
}