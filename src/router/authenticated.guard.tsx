import ErrorBoundary from 'components/error-boundary';
import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from 'stores';
import { UserRole } from 'utils/constants';

export const AuthenticatedGuard = ({
  element,
  authority,
}: {
  element: ReactNode;
  authority?: UserRole[];
}): JSX.Element => {
  const { isAuthenticated, currentUser } = useAppStore((state) => state);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/sign-in?redirect=${encodeURIComponent(pathname + search)}`, {
        replace: true,
      });
    }
  }, [isAuthenticated, navigate, pathname, search]);

  const accessible = authority
    ? isAuthenticated && authority.some((a) => currentUser.roles.indexOf(a) > -1)
    : isAuthenticated;

  return accessible ? <ErrorBoundary>{element}</ErrorBoundary> : <Navigate to="/forbidden" replace />;
};
