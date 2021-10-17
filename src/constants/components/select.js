export const getColourStyles = ({ height, width, ...custom }) => {
  return {
    control: (styles, state) => ({
      ...styles,
      fontFamily: "'Inter', sans-serif",
      fontSize: "15px",
      fontWeight: "500",
      backgroundColor: "#f5f5f5",
      color: "#3d3d3d",
      border: "none",
      borderRadius: "12px",
      outline: state.isSelected && "none",
      padding: "2px 12px;",
      height: height || "51px",
      width: width || "auto",
      cursor: "pointer",
      ...custom,
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "#f5f5f5",
    }),
  };
};
