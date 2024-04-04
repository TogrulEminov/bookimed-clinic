import Icons from '../../assets/Icons/icons';

const DoctorsModal = ({ modal, closeModal }) => {
  return (
    <div
      className={`fixed inset-0  z-[1000] px-3 justify-center overflow-y-auto items-center ${
        modal ? 'flex' : 'hidden'
      }`}>
      <div
        className="fixed inset-0 -z-[1] bg-opacity bg-[rgba(0,0,0,0.5)]"
        onClick={() => closeModal()}></div>
      <div className="bg-white rounded-xl   custom-animation inline-block max-h-[400px]  align-middle	shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative p-3 md:p-6  py-5 w-full  max-w-[600px]">
        <div className="flex items-center justify-between my-3">
          <h3 className="font-semibold text-lg lg:text-3xl">Add doctor 1/3</h3>
          <button className="text-[gray] " onClick={closeModal}>
            <Icons.Close className="w-8 h-8" />
          </button>
        </div>
        <div className="border flex  border-[#ddd] rounded-xl p-4 flex-wrap gap-y-2 lg:flex-nowrap items-center mb-4">
          <Icons.warning className="w-6 h-6" />
          <span className="text-base  lg:ml-4">
            Give as much information about the doctor as possible to build
            patient confidence.
          </span>
        </div>
        <form className="w-full h-full">
          
        </form>
      </div>
    </div>
  );
};

export default DoctorsModal;
