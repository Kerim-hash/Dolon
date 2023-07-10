import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import Image from "next/image";
import { ArrowRight, laptop } from "../assets/index";
import Select, { components } from "react-select";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Multiselect from "@/components/MultiSelect";
import { customStyles } from "@/utils/custumStyles";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
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

const Contact = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Обработка полученных данных
        setCountries(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const options = [
    { label: "Аналитик", value: 'Аналитик' },
    { label: "Геолог", value: 'Геолог' },
    { label: "Маркшейдер", value: 'Маркшейдер' },
    { label: "Полевой геолог", value: 'Полевой геоло' },
    { label: "Назад", value: '-' },
  ];
console.log(countries)
  const optionsNumber = countries.map((country) => ({
    value: country.idd.root,
    label: (
      <div className="flex items-center">
        <Image
          src={country.flags.svg}
          alt={"flag"}
          className="w-4 h-auto mr-2"
          width={21}
          height={15}
        />
        <span>{`(${country.idd.root}${country.idd.suffixes?.join(
          `,${country.idd.root}`
        )})`}</span>
      </div>
    ),
  }));
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
          console.log(result.text);
          console.log("message sent");
          reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  console.log(watch());
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
              Оптимизируйте процессы, повысьте эффективность и создавайте точные
              модели без ограничений.{" "}
            </h2>
            <div className="w-full max-w-[600px]">
              <div className="input-wrapper mb-[40px]">
                <input
                  type="text"
                  className="input body-[10px]"
                  placeholder=" "
                  required
                  autocomplete="off"
                  {...register("fullName", {
                    required: true,
                  })}
                />
                <span className="input__label">ФИО *</span>
              </div>
              <div className="input-wrapper mb-[40px]">
                <Multiselect
                  name={"position"}
                  control={control}
                  values={options}
                />
              </div>
              <div className="flex items-center gap-[8px] mb-[40px]">
                <div className="min-w-[133px] ">
                  <Multiselect
                    name={"numberCode"}
                    control={control}
                    values={optionsNumber}
                  />
                </div>
                <div className="w-full">
                  <div className="input-wrapper">
                    <InputMask
                      mask="+996(999)-99-99-99"
                      maskChar=" "
                      className="input body-[10px]"
                      placeholder=" "
                      required
                      {...register("phone", {
                        required: true,
                      })}
                    />
                    <span className="input__label"></span>
                  </div>
                </div>
              </div>
              <div className="input-wrapper mb-[40px]">
                <input
                  type="text"
                  className="input body-[10px]"
                  placeholder=" "
                  required
                  autocomplete="off"
                  {...register("companyName", {
                    required: true,
                  })}
                />
                <span className="input__label">Название компании</span>
              </div>
              <div className="input-wrapper">
                <input
                  type="email"
                  className="input body-[10px]"
                  placeholder=" "
                  required
                  autocomplete="off"
                  {...register("email", {
                    required: true,
                  })}
                />
                <span className="input__label">Email адрес</span>
              </div>
              <p className="error-text mb-1r">{errors.email?.message}</p>
            </div>
          </div>
        </div>
        <button className="cursor-pointer rounded-b-[16px] flex justify-between px-[80px] py-[20px] bg-[#418DFF] max-[600px]:px-[16px]">
          <h5 className="text-[48px] font-bold text-white max-[1200px]:text-[32px] max-[600px]:text-[24px]">
            ПОЛУЧИТЬ ЭКСПЕРТНУЮ КОНСУЛЬТАЦИЮ{" "}
          </h5>
          <Image src={ArrowRight} alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
