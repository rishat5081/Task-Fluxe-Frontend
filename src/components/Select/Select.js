import { useState } from "react";

import { useOutsideClick } from "hooks";
import * as S from "./styles";
import { useEffect } from "react";

const Select = ({
  items,
  onChange,
  error,
  selectedValue,
  label,
  alignment = "left",
  variant = "default",
}) => {
  const { ref, isShown, setIsShown } = useOutsideClick();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Load "value" get from react hook form with first indexed element value
  useEffect(() => {
    if (onChange) {
      onChange(items[selectedIndex].label);
    }
  }, []);

  const onToggleMenu = () => {
    setIsShown((prev) => !prev);
  };

  const handleClick = (index, CompanyUUID) => {
    selectedValue(CompanyUUID);
    // onChange will be use for form elements
    // to give control react hook form
    if (onChange) {
      onChange(items[index].label);
    }

    setSelectedIndex(index);
    onToggleMenu();
  };

  return (
    <S.SelectWrapper variant={variant}>
      {label && <S.Label htmlFor={label}>{label}</S.Label>}
      <S.Select variant={variant} ref={ref}>
        <S.SelectAnchor onClick={onToggleMenu}>
          {items[selectedIndex].label}
        </S.SelectAnchor>
        {isShown && (
          <S.SelectMenu alignment={alignment}>
            {items.map((item, index) => (
              <S.SelectItem
                key={item.value}
                onClick={() => handleClick(index, item.value)}
              >
                {item.label}
              </S.SelectItem>
            ))}
          </S.SelectMenu>
        )}
        <S.SelectArrow
          toggle={isShown.toString()}
          width={20}
          height={20}
          name="keyboard-arrow-down"
        />
      </S.Select>
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.SelectWrapper>
  );
};

export default Select;
