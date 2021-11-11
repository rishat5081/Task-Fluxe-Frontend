import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { DashboardLayout } from "layouts";
import { Forms, Spinner, Table, TableLink } from "components";
import { ModalContext } from "store/modalContext";
import { table } from "constants/pages/productLaunchTracker";
import * as S from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { getProductLaunchListAPI } from "APIs/Product Launch/productLaunch";

const ProductLaunchTracker = (props) => {
  const { push } = useHistory();
  const [dbTableData, setDbTableData] = useState([]);
  const { onShow: showModal } = useContext(ModalContext);
  const [isTableTransformed, setIsTableTransformed] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);
  //adding a new record
  const addProduct = (newProduct, status) => {
    console.log("newProduct ::", newProduct);
    console.log("status ::", status);
    const newProductInfo = {
      productLaunchTitle: (
        <TableLink
          onClick={() =>
            push(
              `/product-launch-tracker/product/${newProduct.productLaunchTitle}`,
              {
                productInfo: newProduct,
              }
            )
          }
        >
          {newProduct.productLaunchTitle}
        </TableLink>
      ),
      productLaunchStatusTitle:
        status.productLaunchStatusTitle === "Complete" ? (
          <span style={{ color: "#01BF80" }}>
            {status.productLaunchStatusTitle}
          </span>
        ) : (
          <span style={{ color: "#F9B515" }}>
            {status.productLaunchStatusTitle}
          </span>
        ),
    };

    setDbTableData((prev) => [...prev, newProductInfo]);
    setIsTableTransformed(false);
  };

  const topbarAction = {
    name: "New Launch",
    onClick: () => {
      showModal({
        content: <Forms.CreateProductLaunchTracker onAddProduct={addProduct} />,
        title: "Create New Product Tracker",
      });
    },
  };

  useEffect(() => {
    getProductLaunchListAPI()
      .then((result) => result.productList)
      .then((productLaunchList) => {
        if (productLaunchList.length > 0) console.log(productLaunchList);
        linkedTableData(productLaunchList);
      })
      .catch((err) => {});
  }, []);

  const linkedTableData = (tableInfo) => {
    const linkedData = tableInfo.map((el) => ({
      productLaunchTitle: (
        <TableLink
          onClick={() =>
            push(`/product-launch-tracker/product/${el.productLaunchTitle}`, {
              productInfo: el,
            })
          }
        >
          {el.productLaunchTitle}
        </TableLink>
      ),
      productLaunchStatusTitle: (
        <span
          style={{ color: el.ProductLaunchStatus.productLaunchStatusColor }}
        >
          {el.ProductLaunchStatus.productLaunchStatusTitle}
        </span>
      ),
    }));

    setDbTableData(linkedData);
    setLoadingStatus(false);
  };

  // const linkedTableData = tableData.map((el) => ({
  //   productLaunchTitle: (
  //     <TableLink
  //       onClick={() =>
  //         push(`/product-launch-tracker/product/${el.productLaunchTitle}`, {
  //           productInfo: el,
  //         })
  //       }
  //     >
  //       {el.productLaunchTitle}
  //     </TableLink>
  //   ),
  //   productLaunchStatusTitle:
  //     el.productLaunchStatusTitle === "Complete" ? (
  //       <span style={{ color: "#01BF80" }}>{el.productLaunchStatusTitle}</span>
  //     ) : (
  //       <span style={{ color: "#F9B515" }}>{el.productLaunchStatusTitle}</span>
  //     ),
  // }));

  return (
    <DashboardLayout
      topbarAction={topbarAction}
      title="Product Launch Tracker"
      signOutHandler={props.signOutHandler}
    >
      {/* <Table payload={{ data: tableData, columns: table.columns }} /> */}
      {loadingStatus === true ? (
        <Spinner />
      ) : dbTableData.length === 0 ? (
        <div className="text-center text-danger text-bold mt-5 font-weight-bold">
          No Record Found
        </div>
      ) : (
        <Table payload={{ data: dbTableData, columns: table.columns }} />
      )}
      {/* <S.ProductLaunchTracker></S.ProductLaunchTracker> */}
    </DashboardLayout>
  );
};

export default ProductLaunchTracker;
