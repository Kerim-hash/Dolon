import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import { customStyles } from "@/utils/custumStyles";

const Multiselect = ({ name, values = [], control, isDisabled = false }) => {
  const options = values
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur} }) => {
          return (
            <Select
              options={options}
              placeholder={"Choose..."}
              className="basic-single"
              classNamePrefix="select"
              isClearable={false}
              isDisabled={isDisabled}
              styles={customStyles}
              onChange={val => onChange(val.value)}
              components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
              onBlur={onBlur}
              value={options.find(c => c.value === value)}
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
          );
        }}
      />
    </div>
  );
};

export default Multiselect;