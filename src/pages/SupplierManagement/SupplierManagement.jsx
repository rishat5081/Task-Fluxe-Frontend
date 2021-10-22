import { useContext, useState, useEffect } from "react";
import { DashboardLayout } from "layouts";
import {
  Table,
  Search,
  ReactSelect,
  Supplier,
  TableLink,
  Forms,
  Spinner,
} from "components";

import { ModalContext } from "store/modalContext";
import { DrawerContext } from "store/drawerContext";
import { table } from "constants/pages/supplierManagement";
import * as S from "./styles";
import { getSupplierManagementDashBoard_API } from "APIs/apis";

const SupplierManagament = () => {
  const { onShow: showDrawer } = useContext(DrawerContext);
  const { onShow: showModal } = useContext(ModalContext);
  const [linkedTableData, setLinkedTableData] = useState([]);
  const [loadingAPIResponse, setLoadingAPIResponse] = useState(true);
  const [isTableTransformed, setIsTableTransformed] = useState(false);
  const [updateImage, setUpdateImage] = useState(false);

  const addSupplier = (newSupplier) => {
    const newCol = (
      <TableLink
        onClick={() =>
          showDrawer({
            content: (
              <Supplier
                supplierId={newSupplier.supplierUUID}
                companyInfo={newSupplier.companyUUID}
              />
            ),
          })
        }
      >
        {newSupplier.companyName}
      </TableLink>
    );

    setLinkedTableData((prev) => [
      ...prev,
      {
        supplierName: newSupplier.supplierName,
        supplierEmail: newSupplier.supplierEmail,
        companyName: newCol,
        outStanding: "-",
        paidInvoice: "-",
        dueDate: "-",
        status: "-",
      },
    ]);
    setIsTableTransformed(false);
  };
  const topbarAction = {
    name: "New Supplier",
    onClick: () => {
      showModal({
        title: "Create New Supplier",
        content: <Forms.CreateNewSupplier createSupplier={addSupplier} />,
      });
    },
  };

  const getDataFromAPI = async () => {
    try {
      await getSupplierManagementDashBoard_API()
        .then((response) => {
          if (response) {
            //calling linked table function to make the link in the
            // table and passing the result to make the link of first column
            linkedTable(response.companies);
            //setting the loading to false because the result is fetched
            setLoadingAPIResponse(false);
          }
        })
        .catch((error) => {
          if (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    //calling the function of the api to get information from the server
    getDataFromAPI();
  }, [updateImage]);
  // This will be use to transform data to JSX element
  // when data fetched from api
  // setting the table data dynamically if the response is fetched then make the link other wise leave it
  const linkedTable = (tableData) => {
    const linktable = tableData.map((apiRawData) => {
      const supplierObject = apiRawData.Suppliers.map((supplier) => {
        const newCol = (
          <TableLink
            onClick={() =>
              showDrawer({
                content: (
                  <Supplier
                    supplierId={supplier.supplierUUID}
                    companyInfo={apiRawData.companyUUID}
                  />
                ),
              })
            }
          >
            {apiRawData.companyName}
          </TableLink>
        );
        return {
          supplierName: supplier.supplierName,
          supplierEmail: supplier.supplierEmail,
          companyName: newCol,
          outStanding: "-",
          paidInvoice: "-",
          dueDate: "-",
          status: "-",
        };
      });
      return [...supplierObject];
      // }
    });
    //flat is used to make a single array if there is any nested array
    setLinkedTableData(linktable.flat(Infinity));
  };

  return (
    <DashboardLayout title="Supplier Management" topbarAction={topbarAction}>
      <S.TableOptions>
        <Search />

        <ReactSelect placeholder="Filter" width="240px" />
      </S.TableOptions>
      {loadingAPIResponse === true ? (
        <Spinner />
      ) : linkedTableData.length > 0 ? (
        <Table payload={{ data: linkedTableData, columns: table.columns }} />
      ) : (
        "No Record Found"
      )}
    </DashboardLayout>
  );
};

export default SupplierManagament;
