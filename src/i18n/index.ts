import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ruTranslations from './locales/ru.json';
import enTranslations from './locales/en.json';
import kzTranslations from './locales/kz.json';

// Get saved language from localStorage or default to 'ru'
const savedLanguage = localStorage.getItem('language') || 'ru';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ruTranslations },
      en: { translation: enTranslations },
      kz: { translation: kzTranslations },
    },
    lng: savedLanguage,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;