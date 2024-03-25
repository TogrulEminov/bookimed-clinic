import { Link, NavLink } from 'react-router-dom';
import Logo from '../Components/Logo';
import leads from '../assets/svg/leads.svg';
import clinic from '../assets/svg/clinic.svg';
const Header = () => {
  return (
    <header className="max-w-[150px] w-full h-screen bg-white shadow-xl">
      <nav className="pb-5 h-full">
        <Logo />
        <ul className="py-5">
          <li className="mb-2">
            <NavLink
              to="/available-leads"
              className="flex flex-col gap-y-2 justify-center items-center hover:bg-[#e6e3e36b] py-2">
              <img src={leads} className="w-5 h-5 mb-1" alt="" />
              <span className="font-serif">Available Leads</span>
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/clinic"
              className="flex flex-col gap-y-2 justify-center items-center hover:bg-[#e6e3e36b] py-2">
              <img src={clinic} className="w-5 h-5 mb-1" alt="" />
              <span className="font-serif">Clinic</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
