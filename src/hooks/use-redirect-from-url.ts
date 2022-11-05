import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useRedirectFromUrl = (defaultTo = '/') => {
  const [searchParams] = useSearchParams();

  return useCallback(() => {
    const href = searchParams.get('redirect') ? decodeURIComponent(searchParams.get('redirect') ?? '') : defaultTo;
    window.location.href = href;
  }, [searchParams, defaultTo]);
};
