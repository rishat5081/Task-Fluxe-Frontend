import { chipStatus, chipPriority } from "constants/components/chip";
import * as S from "./styles";

const Chip = ({ type, chipStyle }) => {
  return (
    <S.Chip type={type} chipStyle={chipStyle}>
      {type === "status" ? chipStatus[chipStyle].text : chipPriority[chipStyle].text}
    </S.Chip>
  );
};

export default Chip;
