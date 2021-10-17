import { kebabToCapitalCamel } from "utils";
import * as Icons from ".";

const Icon = ({ name, ...rest }) => {
  const tName = kebabToCapitalCamel(name);
  if (!Icons[tName]) return false;

  const SvgIcon = Icons[tName];
  return <SvgIcon {...rest} />;
};

export default Icon;
