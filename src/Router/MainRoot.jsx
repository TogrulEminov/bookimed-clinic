import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';

const MainRoot = () => {
  return (
    <div >
      <Header />
      <Outlet />
    </div>
  );
};

export default MainRoot;
