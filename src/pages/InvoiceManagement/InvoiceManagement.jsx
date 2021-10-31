import { useState, useEffect, useContext, useCallback } from "react";

import { DashboardLayout } from "layouts";
import { Table, TableLink, Forms, Spinner, Invoice } from "components";

import { ModalContext } from "store/modalContext";
import { DrawerContext } from "store/drawerContext";
import { table } from "constants/pages/invoiceManagement";
import * as S from "./styles";
import { getAllDashboardInvoices } from "APIs/Invoice/invoice";
import { callErrorToast, callSuccessToast } from "components/Toast/toast";

const InvoiceManagement = () => {
  // This state will be fetch from API, for now it's constant from file.
  const [tableData, setTableData] = useState(table.data);
  const [transformedTableData, setTransformedTableData] = useState([]);
  const [isTableTransformed, setIsTableTransformed] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [invoiceFromDatabase, setInvoiceFromDatabase] = useState(false);
  const { onShow: showModal } = useContext(ModalContext);
  const { onShow: showDrawer } = useContext(DrawerContext);

  const addInvoice = (newInvoice) => {
    setTableData((prev) => [...prev, newInvoice]);
    setIsTableTransformed(false);
  };

  const transformTableData = useCallback(
    (tableDataaaa) => {
      setTransformedTableData(() => {
        const transformedData = tableDataaaa.map((data) => {
          const newCol1 = (
            <TableLink
              onClick={() =>
                showDrawer({
                  content: <Invoice invoiceUUID={data.invoiceUUID} />,
                })
              }
            >
              {data.Supplier.supplierName}
            </TableLink>
          );
          const newCol10 = (
            <S.SeeNotes>
              {data.invoiceNotes === null ? "No Notes" : data.invoiceNotes}
            </S.SeeNotes>
          );
          const invoiceStatus = (
            <p
              style={{
                color: data.InvoiceStatus.invoiceStatusColor,
                fontWeight: 700,
              }}
            >
              {data.InvoiceStatus.invoiceStatusTitle}
            </p>
          );
          const invoiceFile = (
            <a target="_blank" href={data.invoiceFile}>
              {data.invoiceFileTitle}
            </a>
          );
          return {
            id: 1,
            UUID: "",
            supplierName: newCol1,
            productName: data.Product.productName,
            invoiceTitle: data.invoiceTitle,
            invoiceID: data.invoiceID,
            invoiceDueDate: data.invoiceDueDate,
            invoiceTotal: `$${data.invoiceTotal}`,
            invoicePaid: `$${data.invoicePaid}`,
            outstandingAmount: `$${data.invoiceOutStanding}`,
            invoiceStatusTitle: invoiceStatus,
            invoiceFile: invoiceFile,
            invoiceNotes: newCol10,
          };
        });

        return transformedData;
      });
    },
    [showDrawer, tableData]
  );

  /**
   *
   * getting all the  invoices from the server
   * here is the function to get the invoices from the API
   */

  const getAllInvoiceAPI = () => {
    getAllDashboardInvoices()
      .then((response) => {
        if (response.invoiceInfo.length > 0) {
          transformTableData(response.invoiceInfo);
          setLoadingStatus(false);
          setInvoiceFromDatabase(true);
        } else {
          setLoadingStatus(true);
          setInvoiceFromDatabase(false);
          callErrorToast("No Record Found. Please Add Invoice");
        }
      })
      .catch((err) => {
        if (err) {
          callErrorToast(err);
          setLoadingStatus(true);
        }
      });
  };
  useEffect(() => {
    getAllInvoiceAPI();
    if (!isTableTransformed) {
      // transformTableData(tableData);
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
      {loadingStatus === true ? (
        <Spinner />
      ) : invoiceFromDatabase === false ? (
        <S.recordNotFound>No Invoice Found</S.recordNotFound>
      ) : (
        <Table
          payload={{ data: transformedTableData, columns: table.columns }}
        />
      )}
    </DashboardLayout>
  );
};

export default InvoiceManagement;
