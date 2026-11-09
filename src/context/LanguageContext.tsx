/**
 * Language & Localization Context Provider
 */

import React, { createContext, useContext, ReactNode } from 'react';
import { SEAMarket, SEA_MARKETS } from '../components/layout/UtilityBar';
import { Translations, getTranslation } from '../utils/translations';
import { buildLocalizedHref } from '../utils/routingMatrix';

export interface LanguageContextType {
  currentLanguage: string;
  currentMarket: SEAMarket;
  isNonVn: boolean;
  t: Translations;
  onLanguageChange: (lang: string) => void;
  onMarketChange: (market: SEAMarket) => void;
  getFullPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
  currentLanguage: string;
  currentMarket: SEAMarket;
  onLanguageChange: (lang: string) => void;
  onMarketChange: (market: SEAMarket) => void;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  currentLanguage,
  currentMarket,
  onLanguageChange,
  onMarketChange,
}) => {
  const t = getTranslation(currentLanguage);
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  const getFullPath = (rawPath: string) => {
    return buildLocalizedHref(rawPath, currentMarket.code, currentLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        currentMarket,
        isNonVn,
        t,
        onLanguageChange,
        onMarketChange,
        getFullPath,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if not inside LanguageProvider
    const defaultMarket = SEA_MARKETS[0];
    const defaultLang = 'vn';
    return {
      currentLanguage: defaultLang,
      currentMarket: defaultMarket,
      isNonVn: false,
      t: getTranslation(defaultLang),
      onLanguageChange: () => {},
      onMarketChange: () => {},
      getFullPath: (p: string) => p,
    };
  }
  return context;
};
