import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, laptop } from "../assets/index";
import Select, { components } from "react-select";

const CustomInput = (props) => {
  const { maxLength } = props.selectProps;
  const inputProps = { ...props, maxLength };

  return <components.Input {...inputProps} />;
};

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "transparent",
    borderRadius: state.isFocused ? 6 : 6,
    padding: "4px 8px",
    borderColor: state.isFocused ? "#7aa7ff" : "#DDDDDF",

    boxShadow: state.isFocused ? null : null,
    color: "#fff",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
    background: "#171717",
    color: "#fff",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    background: isFocused ? "#313132" : isSelected ? "#5a5a5c" : undefined,
    zIndex: 1,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
    background: "#171717",
    borderRadius: 8,
  }),
  singleValue: (provided, { data }) => ({
    ...provided,
    color: "white",
  }),
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
    { label: "Аналитик", value: 1 },
    { label: "Геолог", value: 2 },
    { label: "Маркшейдер", value: 3 },
    { label: "Полевой геолог", value: 4 },
    { label: "Назад", value: 5 },
  ];

  const optionsС = countries.map((country) => ({
    value: country.code,
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

  return (
    <div id={"Contacts"} className="container pt-[180px] pb-[180px]">
      <div className="flex flex-col w-full ">
        <div className="main py-[200px] max-[1440px]:py-[120px] px-[80px] w-full flex max-[1200px]:flex-col max-[1200px]:items-center justify-between bg-[#171717] rounded-t-lg max-[600px]:px-[16px]">
          <Image src={laptop} alt="laptop" width={850} height={350} className="max-[1440px]:max-w-[450px] max-[1440px]:max-h-[350px]"  />
          <div className="info ">
            <h2 className={"text-[24px] font-bold text-[white] mb-[80px]"}>
              Оптимизируйте процессы, повысьте эффективность и создавайте точные
              модели без ограничений.{" "}
            </h2>
            <form className="w-full max-w-[600px]">
              <div className="input-wrapper mb-[40px]">
                <input
                  type="text"
                  className="input body-[10px]"
                  placeholder=" "
                  required
                />
                <span className="input__label">ФИО *</span>
              </div>
              <div className="input-wrapper mb-[40px]">
                <Select
                  options={options}
                  components={{ Input: CustomInput }}
                  maxLength="4"
                  styles={customStyles}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      text: "white",
                      primary25: "#313132",
                      primary: "#171717",
                    },
                  })}
                />
              </div>
              <div className="flex items-center gap-[8px] mb-[40px]">
                <div className="min-w-[133px] ">
                  <Select
                    options={optionsС}
                    components={{ Input: CustomInput }}
                    maxLength="4"
                    styles={customStyles}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        text: "white",
                        primary25: "#313132",
                        primary: "#171717",
                      },
                    })}
                  />
                </div>
                <div className="w-full">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className="input body-[10px]"
                      placeholder=" "
                      required
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
                  />
                  <span className="input__label">Название компании</span>
                </div>
                <div className="input-wrapper">
                  <input
                    type="email"
                    className="input body-[10px]"
                    placeholder=" "
                    required
                  />
                  <span className="input__label">Email адрес</span>
                </div>
            </form>
          </div>
        </div>
        <div className="rounded-b-[16px] flex justify-between px-[80px] py-[20px] bg-[#418DFF] max-[600px]:px-[16px]">
       <h5 className="text-[48px] font-bold text-white max-[1200px]:text-[32px] max-[600px]:text-[24px]"> ПОЛУЧИТЬ ЭКСПЕРТНУЮ КОНСУЛЬТАЦИЮ </h5>
        <Image src={ArrowRight} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
