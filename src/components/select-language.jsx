import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const SelectLanguage = () => {
  const { t, i18n } = useTranslation();
  const handleSelection = useCallback((e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 border-2 border-white/20 pl-4 rounded-md overflow-hidden">
      <div>{t('language')}:</div>
      <select
        value={i18n.language}
        onChange={handleSelection}
        className="bg-black pl-3 pr-1 border-transparent border-r-[6px] border-l border-l-white/20 py-2 outline-none"
      >
        <option value="tr">Türkçe</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
