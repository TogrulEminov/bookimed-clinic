import { useState } from 'react';
import Icons from '../../assets/Icons/icons';
import { PiSpinnerGapBold } from 'react-icons/pi';
import Modal from '../../Modal/Modal';

const FilterTable = ({ data, loading }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <>
      <table className="w-full my-3 border-collapse">
        <thead>
          <tr className="bg-[#fafafa]">
            <th className="px-4 py-3.5 text-start text-[#525252] font-medium">
              Created
            </th>
            <th className="px-4 py-3.5 text-start text-[#525252] font-medium">
              Country
            </th>
            <th className="px-4 py-3.5 text-start text-[#525252] font-medium">
              Language
            </th>
            <th className="px-4 py-3.5 text-start text-[#525252] font-medium">
              Prefered country
            </th>
            <th className="px-4 py-3.5 text-start text-[#525252] font-medium">
              Departments
            </th>
            <th className="px-4 py-3.5 text-start text-[#525252] font-medium">
              Diagnosis/procedures
            </th>
            <th className="px-4 py-3.5 text-start flex items-center gap-x-2 text-[#525252] font-medium">
              Attach <Icons.ArrowDown />
            </th>
            <th className="px-4 py-3.5 text-start text-[#525252] font-medium">
              Cost
            </th>
            <th className="px-4 py-3.5 text-start text-[#525252] font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="w-full border-collapse">
          {loading ? (
            <tr className="my-5">
              <td colSpan="9" className="text-center">
                <div className="flex items-center justify-center w-full my-4">
                  <PiSpinnerGapBold className="animate-spin w-4 h-4" />
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr className="bg-red-900">
              <td colSpan="9" className="text-center text-white py-4">
                Data not found
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b border-b-[#ddd] last:border-b-0">
                <td className="px-4 py-3.5">{item?.createdAt}</td>
                <td className="px-4 py-3.5 gap-x-2 flex items-center">
                  <img
                    src={item?.flag}
                    className="w-4 h-4"
                    alt={item?.country}
                  />
                  <span>{item?.country}</span>
                </td>
                <td className="px-4 py-3.5">{item?.language}</td>
                <td className="px-4 py-3.5">{item?.prefered || 'N/A'}</td>
                <td className="px-4 py-3.5">{item?.departments}</td>
                <td className="px-4 py-3.5">{item?.diognostic}</td>
                <td className="px-4 py-3.5">{item?.attach}</td>
                <td className="px-4 py-3.5">{item?.cost}</td>
                <td className="px-4 py-3.5">
                  <button
                    onClick={handleOpen}
                    className="bg-[#15803d] px-4 py-1.5 text-base text-white rounded-xl">
                    Get Lead
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Modal modal={open} closeModal={closeModal} />
    </>
  );
};

export default FilterTable;
