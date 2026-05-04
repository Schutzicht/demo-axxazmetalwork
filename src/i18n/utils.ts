import { ui, defaultLang, type Lang, type UiKey, languages } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment && segment in ui) return segment as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui.en[key] ?? ui[defaultLang][key] ?? key;
  };
}

export function localizePath(lang: Lang, path: string): string {
  const cleaned = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return cleaned === '/' ? '/' : cleaned;
  if (cleaned === '/') return `/${lang}/`;
  return `/${lang}${cleaned}`;
}

export function alternateLinks(currentLang: Lang, currentPath: string) {
  const stripped = currentLang === defaultLang
    ? currentPath
    : currentPath.replace(new RegExp(`^/${currentLang}`), '') || '/';
  return (Object.keys(languages) as Lang[]).map(l => ({
    lang: l,
    href: localizePath(l, stripped),
  }));
}

export { languages };
export type { Lang } from './ui';
