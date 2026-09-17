import type { PageName } from '@/types/app.types';

export function getPageNameFromPath(pathname: string): PageName {
  const normalized = pathname.replace(/\/+$/, '');

  if (normalized === '' || normalized === '/') {
    return 'home';
  }

  return 'home';
}
