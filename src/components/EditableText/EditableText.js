import { useState } from "react";

import * as S from "./styles";

const EditableText = ({ initialValue, placeholder, ...rest }) => {
  const [text, setText] = useState(initialValue);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <S.EditableText
      contentEditable="true"
      suppressContentEditableWarning="true"
      placeholder={placeholder}
      onChange={changeHandler}
      spellCheck="false"
      {...rest}
    >
      {text}
    </S.EditableText>
  );
};

export default EditableText;
