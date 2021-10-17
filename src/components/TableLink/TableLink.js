import * as S from "./styles";

const TableLink = ({ children, onClick }) => {
  return <S.TableLink onClick={onClick}>{children}</S.TableLink>;
};

export default TableLink;
