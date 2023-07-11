import { FooterAuthor, Linkedin, YouTube } from "@/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ t }) => {
  return (
    <div className="footer bg-[#171717]  text-white text-center">
      <div className="container">
        <div className="flex justify-center flex-col py-[80px]">
          <p className="text-[18px] mb-[16px]">{t("footer:Offices")}</p>
          <p className="text-[24px] max-w-[430px] m-[auto] mb-[24px] max-[600px]:text-[22px]">
            {t("footer:address1")}
          </p>
          <p className="text-[24px] max-w-[430px] m-[auto] mb-[80px] max-[600px]:text-[22px]">
            {t("footer:address2")}
          </p>

          <p className="text-[#F5F5F7] mb-[16px]">{t("footer:issues")}</p>
          <p>
            <a className="text-[24px]" href="tel:+77055913880">
              +7 705 591 3880
            </a>
          </p>
          <p>
            <a
              className="text-[24px] max-[600px]:text-[22px]"
              href="mailto:info@dolon.tech"
            >
              info@dolon.tech
            </a>
          </p>

          <div className="flex justify-center mt-[80px] gap-[16px]">
            <a href="https://www.youtube.com/@dolon.ecosystem" target="_blank">
              <Image src={YouTube} alt="YouTube" />
            </a>
            <a href="https://www.linkedin.com/company/dolon" target="_blank">
              <Image src={Linkedin} alt="Linkedin" />
            </a>
          </div>
        </div>

        <div className="flex justify-between pt-[21px] pb-[18px]">
          <div className="flex gap-[16px]">
            <a href="https://www.youtube.com/@dolon.ecosystem" target="_blank">
              <Image
                className="max-w-[24px] max-h-[24px]"
                src={YouTube}
                alt="YouTube"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.linkedin.com/company/dolon" target="_blank">
              <Image
                className="max-w-[24px] max-h-[24px]"
                src={Linkedin}
                alt="Linkedin"
                width={24}
                height={24}
              />
            </a>
          </div>
          <p className="font-Montserrat text-[14px] font-medium">
            © Dolon 2023
          </p>

          <Image src={FooterAuthor} alt="author" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
