import { useState } from "react";

import * as S from "./styles";

const EditableText = ({
  initialValue,
  placeholder,
  selectedValue,
  ...rest
}) => {
  const [text, setText] = useState(initialValue);

  const changeHandler = (event) => {
    console.log(event);
    setText(event.target.value);
    selectedValue(text);
  };

  return (
    <S.EditableText
      contentEditable="true"
      suppressContentEditableWarning="true"
      placeholder={placeholder}
      onChange={changeHandler}
      spellCheck="true"
      {...rest}
    >
      {text}
    </S.EditableText>
  );
};

export default EditableText;
