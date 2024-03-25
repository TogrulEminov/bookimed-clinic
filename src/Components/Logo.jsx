import logos from '../assets/svg/logo.dcbcb76f.svg';
const Logo = () => {
  return (
    <figure className=" w-full bg-[#a3cc0e] h-[50px] flex items-center justify-center">
      <img src={logos} alt="logo" className="max-w-[80px] w-full h-full " />
    </figure>
  );
};

export default Logo;
