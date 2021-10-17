import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { DashboardLayout } from "layouts";
import { Table, TableLink } from "components";
import { ModalContext } from "store/modalContext";
import { table } from "constants/pages/productLaunchTracker";
import * as S from "./styles";

const ProductLaunchTracker = () => {
  const { push } = useHistory();
  const { onShow } = useContext(ModalContext);

  const topbarAction = {
    name: "New Launch",
    onClick: () => {
      onShow({
        title: "Create New Product Tracker",
        content: "This will be the form to create new tracker",
      });
    },
  };

  const tableData = table.data.map((el) => {
    return {
      ...el,
      col2:
        el.col2 === "Complete" ? (
          <span style={{ color: "#01BF80" }}>{el.col2}</span>
        ) : (
          <span style={{ color: "#F9B515" }}>{el.col2}</span>
        ),
    };
  });

  return (
    <DashboardLayout topbarAction={topbarAction} title="Product Launch Tracker">
      <Table payload={{ data: tableData, columns: table.columns }} />
      <S.ProductLaunchTracker>
        <TableLink onClick={() => push("/product-launch-tracker/product/1")}>
          To see product/1 click
        </TableLink>
      </S.ProductLaunchTracker>
    </DashboardLayout>
  );
};

export default ProductLaunchTracker;
