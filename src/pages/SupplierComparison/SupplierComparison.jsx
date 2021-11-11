import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { DashboardLayout } from "layouts";
import { Table, TableLink, Forms, Spinner } from "components";
import { table } from "constants/pages/supplierComparison";
import { ModalContext } from "store/modalContext";
import { useState } from "react";
import { getAllSupplierComparison } from "APIs/Supplier Comparison/supplierComparison";

const SupplierComparison = (props) => {
  const { push } = useHistory();
  const { onShow: showModal } = useContext(ModalContext);
  const [dbTableData, setDbTableData] = useState(table.data);
  const [isTableTransformed, setIsTableTransformed] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);

  //adding a new record
  const addComparisonProduct = (newProduct) => {
    const newProductInfo = {
      comparisonTitle: (
        <TableLink
          onClick={() =>
            push(
              `/supplier-comparison/supplier/${newProduct.comparisonTitle}`,
              {
                productInfo: newProduct,
              }
            )
          }
        >
          {newProduct.comparisonTitle}
        </TableLink>
      ),
      comparisonRatingID: <span style={{ color: "#7e94a9" }}>Not Started</span>,
    };

    setDbTableData((prev) => [...prev, newProductInfo]);
    setIsTableTransformed(false);
  };

  const topbarAction = {
    name: "New Supplier Comparison",
    onClick: () => {
      showModal({
        content: (
          <Forms.CreateNewSupplierComparison
            onAddProduct={addComparisonProduct}
          />
        ),
        title: "Create a New Comparison",
      });
    },
  };

  useEffect(() => {
    getAllSupplierComparison()
      .then((result) => {
        linkedTableData(result.comparisonList);
      })
      .catch((err) => {});
  }, []);

  const linkedTableData = (tableInfo) => {
    const linkedData = tableInfo.map((el) => {
      return {
        comparisonTitle: (
          <TableLink
            onClick={() =>
              push(`/supplier-comparison/supplier/${el.comparisonTitle}`, {
                productInfo: el,
              })
            }
          >
            {el.comparisonTitle}
          </TableLink>
        ),
        comparisonRatingID:
          el.ComparisonRating === null ? (
            <span style={{ color: "#7e94a9" }}>Not Started</span>
          ) : (
            <span style={{ color: el.ComparisonRating.color }}>
              {el.ComparisonRating.title}
            </span>
          ),
      };
    });

    setDbTableData(linkedData);
    setLoadingStatus(false);
  };
  return (
    <DashboardLayout
      title="Supplier Comparison"
      topbarAction={topbarAction}
      signOutHandler={props.signOutHandler}
    >
      {loadingStatus === true ? (
        <Spinner />
      ) : (
        <Table payload={{ data: dbTableData, columns: table.columns }} />
      )}
    </DashboardLayout>
  );
};

export default SupplierComparison;
