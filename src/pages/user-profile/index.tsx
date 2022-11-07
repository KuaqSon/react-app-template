import UserInfo from 'components/shared/user-info';
import { useAppStore } from 'stores';

export default function PageUserProfile(): JSX.Element {
  const currentUser = useAppStore((state) => state.currentUser);

  return (
    <>
      <UserInfo user={currentUser} />
    </>
  );
}
