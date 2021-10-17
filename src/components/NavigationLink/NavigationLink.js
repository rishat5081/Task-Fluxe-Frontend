import { Icon } from "components";
import * as S from "./styles";

const NavigationLink = ({ to, children, icon, disabled, separator }) => {
  return (
    <>
      <S.NavigationLink to={to} disabled={disabled}>
        <Icon name={icon} width={21} height={21} />
        <S.NavigationContent>{children}</S.NavigationContent>
      </S.NavigationLink>
      {separator && <S.Separator />}
    </>
  );
};

export default NavigationLink;
