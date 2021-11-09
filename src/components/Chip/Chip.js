import { chipStatus, chipPriority } from "constants/components/chip";
import * as S from "./styles";

const Chip = ({ type, chipStyle, color }) => {
  return (
    <S.Chip
      type={type}
      style={{ backgroundColor: color }}
      chipStyle={chipStyle}
    >
      {chipStyle}
      {/* {type === "status"
        ? chipStatus[chipStyle].text
        : chipPriority[chipStyle].text} */}
    </S.Chip>
  );
};

export default Chip;
