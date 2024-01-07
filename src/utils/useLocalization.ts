import { mainConfig } from '../configs/main';

import ru_locale from '../localization/ru';
import en_locale from '../localization/en';

export const useLocalization = () => {
  switch (mainConfig.localization) {
    case 'ru':
      return ru_locale;
    case 'en':
      return en_locale;
  }
};
