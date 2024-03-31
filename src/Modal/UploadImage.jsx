import ModalImg from '../Components/ModalImg';
import Icons from '../assets/Icons/icons';
const UploadImage = ({ modal, closeModal }) => {
  return (
    <div
      className={`fixed inset-0  z-[1000] px-3 justify-center overflow-y-auto items-center ${
        modal ? 'flex' : 'hidden'
      }`}>
      <div
        className="fixed inset-0 -z-[1] bg-opacity bg-[rgba(0,0,0,0.5)]"
        onClick={() => closeModal()}></div>
      <div className="bg-white rounded-xl   custom-animation inline-block max-h-[600px]  align-middle	shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative p-6  py-5 w-full  max-w-[1000px]">
        <div className="flex items-center justify-between my-3">
          <h3 className="font-semibold text-3xl">Edit clinic's photos</h3>
          <button className="text-[gray] " onClick={closeModal}>
            <Icons.Close className="w-8 h-8" />
          </button>
        </div>
        <div className="border border-[#ddd] rounded-xl p-4  items-center mb-4 flex flex-wrap ">
          <Icons.warning />
          <span className="text-base  ml-4">
            {' '}
            Add as many high quality photos as possible so clients can see the
            clinic in every detail. Maximum file size is 10 MB. Make sure your
            photos have .jpg, .jpeg, file types{' '}
          </span>
        </div>
        <div className="flex min-h-[350px] h-full lg:min-h-full lg:h-[350px] flex-wrap border border-[#dfe1e5]">
          <div className="border border-[#dfe1e5] h-[250px] lg:h-full col-12 lg:col-lg-6 xl:col-xl-6 relative">
            {/* <img src="" className="w-full h-full object-cover hidden" alt="" /> */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col gap-y-3">
                <span className="absolute left-3 top-4">1</span>
                <Icons.NoData className="mx-auto" />
                <span className="font-semibold">No data</span>
              </div>
            </div>
          </div>
          <div className="col-12 lg:col-lg-6 xl:col-xl-6 h-full">
            <div className="flex flex-wrap h-full">
              <div className="border border-[#dfe1e5] col-12 sm:col-md-6 lg:col-lg-6 xl:col-xl-6 flex items-center justify-center h-[150px] lg:h-1/2 relative">
                {/* <img src="" className="w-full h-full object-cover hidden" alt="" /> */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="flex flex-col gap-y-3">
                    <span className="absolute left-3 top-4">2</span>
                    <Icons.NoData className="mx-auto" />
                    <span className="font-semibold">No data</span>
                  </div>
                </div>
              </div>
              <div className="border border-[#dfe1e5] col-12 sm:col-md-6 lg:col-lg-6  xl:col-xl-6 flex items-center justify-center h-[150px] lg:h-1/2 relative">
                {/* <img src="" className="w-full h-full object-cover hidden" alt="" /> */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="flex flex-col gap-y-3">
                    <span className="absolute left-3 top-4">3</span>
                    <Icons.NoData className="mx-auto" />
                    <span className="font-semibold">No data</span>
                  </div>
                </div>
              </div>
              <div className="border border-[#dfe1e5] col-12 sm:col-md-6 lg:col-lg-6   xl:col-xl-6 flex items-center justify-center h-[150px] lg:h-1/2 relative">
                {/* <img src="" className="w-full h-full object-cover hidden" alt="" /> */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="flex flex-col gap-y-3">
                    <span className="absolute left-3 top-4">4</span>
                    <Icons.NoData className="mx-auto" />
                    <span className="font-semibold">No data</span>
                  </div>
                </div>
              </div>
              <div className="border border-[#dfe1e5] col-12 sm:col-md-6 lg:col-lg-6  xl:col-xl-6 flex items-center justify-center h-[150px] lg:h-1/2 relative">
                {/* <img src="" className="w-full h-full object-cover hidden" alt="" /> */}
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="flex flex-col gap-y-3">
                    <span className="absolute left-3 top-4">5</span>
                    <Icons.NoData className="mx-auto" />
                    <span className="font-semibold">No data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <span className="text-sm text-[rgba(0,0,0,.38)] mb-2.5">
            These 5 photos are on the first screen on the clinic's page. Drag
            and drop the needed photo to change it.{' '}
          </span>
          <div>
            <span className="text-sm block my-3 text-[#737373]">
              {' '}
              Add some more photos. Clients will see them clicking on photos on
              the first screen of the clinic's page.{' '}
            </span>
            <div className="flex my-4 items-center flex-wrap gap-y-4">
              <ModalImg
                img="https://ets-russiatravel.com/wp-content/uploads/2024/01/mojka1-3-scaled.jpg"
                count={1}
              />
            </div>
          </div>
          <div>
            <form action="">
              <label
                htmlFor="file"
                className="relative flex items-center justify-center mt-4 w-20 h-20 bg-[#e7e7e7] border-4 border-[#a3cc0e] text-[#a3cc0e]">
                <input
                  id="file"
                  type="file"
                  className="sr-only cursor-pointer"
                />
                <Icons.plus className="text-" />
              </label>
              <div className="flex items-center gap-x-3 flex-wrap justify-center my-3">
                <button className="text-left hover:text-black text-[gray] mx-5 capitalize">
                  close
                </button>
                <button className="px-10 py-3 mx-5 bg-red-400 rounded-2xl text-white flex items-center justify-center text-base">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
