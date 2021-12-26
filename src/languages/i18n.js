import i18next from 'i18next';
import en from './en.json';
import tr from './tr.json';
import {initReactI18next, useTranslation} from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en,
    tr,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
