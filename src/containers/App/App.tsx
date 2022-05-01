import LayoutWithSidebar from 'components/LayoutWithSidebar';
import UsersList from 'containers/UsersList';
import UsersSorter from 'containers/UsersSorter';

const App = () => {
  return (
    <LayoutWithSidebar sidebar={<UsersSorter />}>
      <UsersList />
    </LayoutWithSidebar>
  );
};

export default App;
