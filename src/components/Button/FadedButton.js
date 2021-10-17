import * as S from "./styles";

const FadedButton = ({ children, icon, ...rest }) => {
  return (
    <S.FadedButton {...rest}>
      {icon && <S.ButtonIcon name={icon} width={16} height={16} />}
      {children}
    </S.FadedButton>
  );
};

export default FadedButton;
