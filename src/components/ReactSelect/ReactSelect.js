import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";
import { getColourStyles } from "constants/components/select";

const Select = ({
  options,
  placeholder,
  height,
  width,
  handleChange,
  custom,
}) => {
  const colourStyles = getColourStyles({ height, width, ...custom });
  const animatedComponents = makeAnimated();
  return (
    <ReactSelect
      isMulti
      onChange={handleChange}
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder={placeholder}
      options={options}
      styles={colourStyles}
    />
  );
};

export default Select;
