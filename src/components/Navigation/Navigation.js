import { NavigationLink } from "components";
import { navigations } from "constants/components/navigation";
import * as S from "./styles";

const Navigation = ({ padding }) => {
  return (
    <S.Navigation padding={padding}>
      {navigations.map(({ text, hasSeparator, ...rest }) => (
        <NavigationLink separator={hasSeparator} key={text} {...rest}>
          {text}
        </NavigationLink>
      ))}
    </S.Navigation>
  );
};

export default Navigation;
