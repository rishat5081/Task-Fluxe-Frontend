import { useState } from "react";

import * as S from "./styles";

const Tab = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <S.Tab>
      <S.TabAnchors>
        {content.map(({ anchor }, index) => (
          <S.TabAnchor
            key={anchor}
            onClick={() => handleActiveIndex(index)}
            active={index === activeIndex}
          >
            {anchor}
          </S.TabAnchor>
        ))}
      </S.TabAnchors>
      <S.TabContent>{content[activeIndex].component}</S.TabContent>
    </S.Tab>
  );
};

export default Tab;
