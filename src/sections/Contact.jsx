import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import Image from "next/image";
import { ArrowRight, laptop } from "../assets/index";
import { components } from "react-select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Multiselect from "@/components/MultiSelect";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
// validation
const Form = yup
  .object({
    fullName: yup.string().required("Enter your name"),
    position: yup.string().required("Enter your position"),
    phone: yup.string().trim().required("Enter your phone"),
    companyName: yup.string().trim().required("Enter your company name"),
    email: yup
      .string()
      .email("email must be a valid email")
      .required("Enter your email"),
  })
  .required();

const CustomInput = (props) => {
  const { maxLength } = props.selectProps;
  const inputProps = { ...props, maxLength };

  return <components.Input {...inputProps} />;
};

const Contact = ({ t }) => {

  const options = [
    { label: t("contact:post1"), value: t("contact:post1") },
    { label: t("contact:post2"), value: t("contact:post2") },
    { label: t("contact:post3"), value: t("contact:post3") },
    { label: t("contact:post4"), value: t("contact:post4") },
    { label: t("contact:post5"), value: "-" },
  ];

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef();
  const sendEmail = () => {
    toast("sended!");
    emailjs
      .sendForm(
        "service_ksubelj",
        "template_e6den2k",
        form.current,
        "yGmJuFwDQcKyEtlM7"
      )
      .then(
        (result) => {
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id={"Contacts"} className="container pt-[180px] pb-[180px]">
      <form
        ref={form}
        className="flex flex-col w-full "
        onSubmit={handleSubmit(sendEmail)}
      >
        <div className="main py-[200px] max-[1440px]:py-[120px] px-[80px] w-full flex max-[1200px]:flex-col max-[1200px]:items-center justify-between bg-[#171717] rounded-t-lg max-[600px]:px-[16px] max-[600px]:py-[40px]">
          <Image
            src={laptop}
            alt="laptop"
            width={850}
            height={350}
            className="max-[1440px]:max-w-[450px] max-[1440px]:max-h-[350px] max-[600px]:max-w-[310px]"
          />
          <div className="info">
            <h2 className={"text-[24px] font-bold text-[white] mb-[80px]"}>
              {t("contact:title")}
            </h2>
            <div className="w-full max-w-[600px]">
              <div className="input-wrapper mb-[40px]">
                <input
                  type="text"
                  className="input body-[10px]"
                  placeholder=" "
                  required
                  autoComplete="off"
                  {...register("fullName", {
                    required: true,
                  })}
                />
                <span className="input__label">{t("contact:fullName")}</span>
              </div>
              <div className="input-wrapper mb-[40px]">
                <Multiselect
                 label={t("contact:post")}
                  name={"position"}
                  control={control}
                  values={options}
                />
              </div>
              <div className="flex items-center gap-[8px] mb-[40px]">
                <PhoneInput
                  country={"us"}
                  inputStyle={{
                    color: "#fff",
                    width: "100%",
                    background: "transparent",
                    padding: "22px 55px",
                  }}
                  dropdownStyle={{
                    height: "450px",
                    width: "210px",
                    backgroundColor: "#171717",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                  buttonStyle={{ backgroundColor: "#171717" }}
              
                />
              </div>
              <div className="input-wrapper mb-[40px]">
                <input
                  type="text"
                  className="input body-[10px]"
                  placeholder=" "
                  required
                  autoComplete="off"
                  {...register("companyName", {
                    required: true,
                  })}
                />
                <span className="input__label">{t("contact:companyName")}</span>
              </div>
              <div className="input-wrapper">
                <input
                  type="email"
                  className="input body-[10px]"
                  placeholder=" "
                  required
                  autoComplete="off"
                  {...register("email", {
                    required: true,
                  })}
                />
                <span className="input__label">
                  {t("contact:EmailAddress")}
                </span>
              </div>
              <p className="error-text mb-1r">{errors.email?.message}</p>
            </div>
          </div>
        </div>
        <button className="cursor-pointer rounded-b-[16px] flex justify-between px-[80px] py-[20px] bg-[#418DFF] max-[600px]:px-[16px]">
          <h5 className="text-[48px] font-bold text-white max-[1200px]:text-[32px] max-[600px]:text-[24px]">
          {t("common:link")}
          </h5>
          <Image src={ArrowRight} alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
