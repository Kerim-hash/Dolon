import { FooterAuthor, Linkedin, YouTube } from "@/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-[#171717]  text-white text-center">
      <div className="container">
        <div className="flex justify-center flex-col py-[80px]">
          <p className=" text-[18px] mb-[16px]">Офисы</p>
          <p className="text-[24px] mb-[24px]">
            Республика Казахстан, г. Алматы
            <br />
            ул. Тимирязева, 42, к. 15/1, оф. 7
          </p>
          <p className="text-[24px] mb-[80px]">
            Кыргызская Республика, г. Бишкек
            <br />
            ул. Ахунбаева 165
          </p>

          <p className="text-[#F5F5F7] mb-[16px]">По вопросам закупки</p>
          <p>
            <a className="text-[24px]" href="tel:+77055913880">
              +7 705 591 3880
            </a>
          </p>
          <p>
            <a className="text-[24px]" href="mailto:info@dolon.tech">
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
          <p className="font-Montserrat font-[14px] font-medium">
            © Dolon 2023
          </p>

          <Image src={FooterAuthor} alt="author" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
