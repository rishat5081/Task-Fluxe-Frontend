import { forwardRef } from "react";
import * as S from "./styles";

const Input = forwardRef(
  ({ name, type, label, value, placeholder, error, ...rest }, ref) => {
    return (
      <S.InputWrapper>
        {label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.Input
          error={error}
          ref={ref}
          defaultValue={value}
          name={name}
          placeholder={placeholder}
          type={type}
          {...rest}
        />
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.InputWrapper>
    );
  }
);

export default Input;
