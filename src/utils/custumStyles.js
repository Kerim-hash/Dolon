export const customStyles = {
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