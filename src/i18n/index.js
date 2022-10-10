import { createI18n } from 'vue-i18n'
import en from "@/locales/en.json";

const i18n = createI18n({
  legacy: false,
  fallbackLocale: "en",
  globalInjection: true,
  locale: "en",
  messages: {
    en,
  },
});
export default i18n;
