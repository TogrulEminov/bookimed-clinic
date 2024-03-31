import Icons from '../../assets/Icons/icons';

const ClinicsPhoto = ({ handleOpen }) => {
  return (
    <section className="relative" id="#clinics-photo">
      <div className="flex flex-wrap min-h-[300px] lg:min-h-full lg:h-[500px] border border-[#dfe1e5]">
        <div className="border border-[#dfe1e5] h-[250px] lg:h-full col-12 lg:col-lg-5 xl:col-xl-6">
          {/* <img src="" className="w-full h-full object-cover hidden" alt="" /> */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col gap-y-3">
              <Icons.NoData className="mx-auto" />
              <span className="font-semibold">No data</span>
            </div>
          </div>
        </div>
        <div className="col-12 lg:col-lg-7 xl:col-xl-6 h-full">
          <div className="flex flex-wrap h-full">
            <div className="border border-[#dfe1e5] col-12 h-[200px]  sm:col-sm-6 lg:col-lg-6 xl:col-xl-6 flex items-center justify-center lg:h-1/2">
              {/* <img src="" className="w-full h-full object-cover hidden" alt="" /> */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col gap-y-3">
                  <Icons.NoData className="mx-auto" />
                  <span className="font-semibold">No data</span>
                </div>
              </div>
            </div>
            <div className="border border-[#dfe1e5] col-12  h-[200px] sm:col-sm-6 lg:col-lg-6 xl:col-xl-6  flex items-center justify-center lg:h-1/2">
              {/* <img src="" className="w-full h-full object-cover hidden" alt="" /> */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col gap-y-3">
                  <Icons.NoData className="mx-auto" />
                  <span className="font-semibold">No data</span>
                </div>
              </div>
            </div>
            <div className="border border-[#dfe1e5] col-12 h-[200px] sm:col-sm-6 lg:col-lg-6 xl:col-xl-6 flex items-center justify-center lg:h-1/2">
              {/* <img src="" className="w-full h-full object-cover hidden" alt="" /> */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col gap-y-3">
                  <Icons.NoData className="mx-auto" />
                  <span className="font-semibold">No data</span>
                </div>
              </div>
            </div>
            <div className="border border-[#dfe1e5] col-12 h-[200px] sm:col-sm-6 lg:col-lg-6 xl:col-xl-6 flex items-center justify-center lg:h-1/2">
              {/* <img src="" className="w-full h-full object-cover hidden" alt="" /> */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col gap-y-3">
                  <Icons.NoData className="mx-auto" />
                  <span className="font-semibold">No data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleOpen} className="absolute bottom-5 right-5">
        <Icons.camera />
      </button>
    </section>
  );
};

export default ClinicsPhoto;
