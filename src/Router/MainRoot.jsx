import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';
import BreadCrumb from '../Components/BreadCrumb';

const MainRoot = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="fixed max-w-[150px] w-full">
        <Header />
      </div>
      <div className="max-w-[calc(100%-150px)] ml-[150px]   w-full h-full">
        <div className="bg-[#a3cc0e] h-[50px] fixed top-0 w-full z-[999]"></div>
        <div className="pt-14 px-5 ">
          <BreadCrumb />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainRoot;
