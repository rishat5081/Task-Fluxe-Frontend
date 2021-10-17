import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { DashboardLayout } from "layouts";
import { Table, TableLink } from "components";
import { table } from "constants/pages/supplierComparison";
import { ModalContext } from "store/modalContext";
import * as S from "./styles";

const SupplierComparison = () => {
  const { push } = useHistory();
  const { onShow } = useContext(ModalContext);

  const topbarAction = {
    name: "New Supplier Comparison",
    onClick: () => {
      onShow({
        title: "Create New Supplier Comparison",
        content: "This will be the form to create new supplier comparison",
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
    <DashboardLayout title="Supplier Comparison" topbarAction={topbarAction}>
      <Table payload={{ data: tableData, columns: table.columns }} />
      <S.SupplierComparison>
        <TableLink onClick={() => push("/supplier-comparison/supplier/1")}>
          To see comparison/1 click
        </TableLink>
      </S.SupplierComparison>
    </DashboardLayout>
  );
};

export default SupplierComparison;
