import { useState, useEffect, useContext, useCallback } from "react";

import { DashboardLayout } from "layouts";
import { Table, TableLink, Forms } from "components";

import { ModalContext } from "store/modalContext";
import { DrawerContext } from "store/drawerContext";
import { table } from "constants/pages/invoiceManagement";
import * as S from "./styles";

const InvoiceManagement = () => {
  // This state will be fetch from API, for now it's constant from file.
  const [tableData, setTableData] = useState(table.data);
  const [transformedTableData, setTransformedTableData] = useState([]);
  const [isTableTransformed, setIsTableTransformed] = useState(false);
  const { onShow: showModal } = useContext(ModalContext);
  const { onShow: showDrawer } = useContext(DrawerContext);

  const addInvoice = (newInvoice) => {
    setTableData((prev) => [...prev, newInvoice]);
    setIsTableTransformed(false);
  };

  const transformTableData = useCallback(() => {
    setTransformedTableData(() => {
      const transformedData = tableData.map((el) => {
        const newCol1 = (
          <TableLink
            onClick={() =>
              showDrawer({
                content: (
                  <span style={{ color: "#ccc" }}>
                    There is no component for this field. This will be updated, later.
                  </span>
                ),
              })
            }
          >
            {el.col1}
          </TableLink>
        );
        const newCol10 = <S.SeeNotes>{el.col10}</S.SeeNotes>;

        return {
          ...el,
          col1: newCol1,
          col10: newCol10,
        };
      });

      return transformedData;
    });
  }, [showDrawer, tableData]);

  useEffect(() => {
    if (!isTableTransformed) {
      transformTableData();
      setIsTableTransformed(true);
    }
  }, [isTableTransformed, transformTableData]);

  const topbarAction = {
    name: "New Invoice",
    onClick: () => {
      showModal({
        content: <Forms.CreateNewInvoice onAddInvoice={addInvoice} />,
        title: "Create New Invoice",
      });
    },
  };

  return (
    <DashboardLayout title="Invoice Management" topbarAction={topbarAction}>
      <Table payload={{ data: transformedTableData, columns: table.columns }} />
    </DashboardLayout>
  );
};

export default InvoiceManagement;
