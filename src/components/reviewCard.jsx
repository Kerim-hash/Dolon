import { arrow } from "@/assets";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const ReviewCard = ({ img, name, position, companyName, review, t }) => {
  const [showModal, setShowModal] = React.useState(false);

  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showModal]);

  return (
    <div className="relative max-w-[538px] min-h-[640px] bg-white border border-gray-200 rounded-lg shadow  max-[1440px]:max-w-[380px] max-[1400px]:min-h-[770px]  max-[1200px]:min-w-[380px]  max-[600px]:max-w-[inherit] max-[600px]:min-w-[auto] max-[600px]:min-h-[550px]">
      <div className="p-[40px]">
        <div className="header flex items-center justify-between">
          <div className="info lg:max-w-[338px]">
            <h6 className="text-[#418DFF] text-[18px] font-bold">
              {companyName}
            </h6>
            <h5 className="font-[18px] font-[#1D1D1F] my-[12px]">{name}</h5>
            <p className="text-[#1D1D1F] font-[16px]">{position}</p>
          </div>
          <Image src={img} alt="user" width={100} height={100} />
        </div>
        <div className="truncate"><p className="mt-[80px] max-[600px]:mt-[20px]">
          {review}
        </p></div>
        <button
          className="absolute flex items-center bottom-[40px] right-[40px] text-[#6C6C6C] hover:text-[#000] font-semibold"
          type="button"
          onClick={() => setShowModal(true)}
        >
        {t("reviews:reactFully")}
          <Image
            className="ml-[16px]"
            src={arrow}
            alt="arrow"
            width={20}
            height={24}
          />
        </button>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div  ref={modalRef} className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <div className="p-[40px] max-[600px]:p-[10px]">
                    <div className="header flex items-center justify-between">
                      <div className="info lg:max-w-[338px]">
                        <h6 className="text-[#418DFF] text-[18px] font-bold max-[600px]:text-[14px]">
                          {companyName}
                        </h6>
                        <h5 className="font-[18px] font-[#1D1D1F] my-[12px] max-[600px]:text-[14px]">
                          {name}
                        </h5>
                        <p className="text-[#1D1D1F] font-[16px] max-[600px]:text-[13px]">{position}</p>
                      </div>
                      <Image className="max-[600px]:w-[70px]" src={img} alt="user" width={100} height={100} />
                    </div>
                    <p className="mt-[50px] text-[16px] text-[#535354] lg:leading-[130%] max-[600px]:overflow-y-scroll max-[600px]:h-[350px] max-[600px]:mt-[20px] max-[600px]:mb-[20px]">
                      {review}
                    </p>
                    <button
                      className="absolute flex items-center bottom-[40px] right-[40px] text-[#6C6C6C] hover:text-[#000] font-semibold  max-[600px]:bottom-[20px]"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      {t("reviews:close")}
                      <Image
                        className="ml-[16px] rotate-180"
                        src={arrow}
                        alt="arrow"
                        width={20}
                        height={24}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default ReviewCard;
