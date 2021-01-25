import { LANGUAGE } from '../utils/constants';

export const setLanguage = language => localStorage.setItem(LANGUAGE, language);
export const getLanguage = () => localStorage.getItem(LANGUAGE);