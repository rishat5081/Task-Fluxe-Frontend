import * as S from "./styles";

const LinkButton = ({ children, icon, ...rest }) => {
  return (
    <S.LinkButton {...rest}>
      {icon && <S.ButtonIcon name={icon} width={20} height={20} />}
      {children}
    </S.LinkButton>
  );
};

export default LinkButton;
