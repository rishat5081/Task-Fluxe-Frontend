import { Icon } from "components";

import * as S from "./styles";

const Search = ({ placeholder = "Search..." }) => {
  return (
    <S.Search>
      <S.SearchInput placeholder={placeholder} />
      <Icon name="search" />
    </S.Search>
  );
};

export default Search;
