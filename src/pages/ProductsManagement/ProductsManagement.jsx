import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { DashboardLayout } from "layouts";
import { Table, TableLink } from "components";
import { ModalContext } from "store/modalContext";
import { table } from "constants/pages/productsManagement";
import * as S from "./styles";

const ProductsManagement = () => {
  const { push } = useHistory();
  const { onShow } = useContext(ModalContext);

  const topbarAction = {
    name: "New Note",
    onClick: () => {
      onShow({
        title: "Create New Note",
        content: "This will be the form to create new note",
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
    <DashboardLayout topbarAction={topbarAction} title="Products Management">
      <Table payload={{ data: tableData, columns: table.columns }} />
      <S.ProductsManagement>
        <TableLink onClick={() => push("/products-management/product/1")}>
          To see product/1 click
        </TableLink>
      </S.ProductsManagement>
    </DashboardLayout>
  );
};

export default ProductsManagement;
