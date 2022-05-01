import LayoutWithSidebar from 'components/LayoutWithSidebar';
import UserProfile from 'containers/UserProfile';
import UsersList from 'containers/UsersList';
import UsersSorter from 'containers/UsersSorter';

const App = () => {
  return (
    <LayoutWithSidebar sidebar={<UsersSorter />}>
      <UserProfile />
      <UsersList />
    </LayoutWithSidebar>
  );
};

export default App;
