import { Fragment, useContext, useEffect, useState } from "react";
import { Controller } from "react-hook-form";

import { useFormWithYup } from "hooks";
import { Input, SubmitButton, Select, Spinner } from "components";
import { capitalize } from "utils";
import { schema, createInvoiceFields } from "./validations";
import { ModalContext } from "store/modalContext";
import { createAnInvoice, getAllSupplier_Name } from "APIs/Invoice/invoice";
import { callErrorToast, callSuccessToast } from "components/Toast/toast";

import axios from "axios";

const CreateNewInvoice = ({ onAddInvoice }) => {
  /**
   *
   *   //start of states
   */
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const { onHide } = useContext(ModalContext);
  const [fields, setFields] = useState();
  const [dbResponse, setDbResponse] = useState();
  const [selectedSupplier, setSelectedSupplier] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedInvoiceStatus, setSelectedInvoiceStatus] = useState();
  const [loadingStatus, setLoadingStatus] = useState(true);
  /**
   *
   *   //end of states
   */
  /**
   * start of API for getting the name of product, supplier and status
   */
  const gettingAllSuppliers = async () => {
    await getAllSupplier_Name()
      .then((response) => {
        if (response) {
          const supplierNames = response.supplierInfo.map((supplier) => ({
            label: supplier.supplierName,
            value: supplier.supplierUUID,
          }));

          const InvoiceStatus = response.InvoiceStatus.map((invoiceStatus) => ({
            // console.log(invoiceStatus);
            label: invoiceStatus.invoiceStatusTitle,
            // color: invoiceStatus.invoiceStatusColor,
            value: invoiceStatus.invoiceStatusUUID,
          }));

          createInvoiceFields[0].items = supplierNames;
          createInvoiceFields[6].items = InvoiceStatus;
          setFields(createInvoiceFields);
          setDbResponse(response.supplierInfo);

          setLoadingStatus(false);

          // callSuccessToast(response);
        }
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          callErrorToast(error);
        }
      });
  };

  /**
   * end of API
   */
  const onSubmit = (data, event) => {
    console.log();
    event.preventDefault();
    const {
      supplierName,
      dueDate,
      invoiceAmount,
      paidAmount,
      invoiceTitle,
      status,
      invoiceFile,
      productName,
    } = data;

    const formData = new FormData();
    formData.append("Attachment", invoiceFile[0]);
    formData.append("supplierUUID", selectedSupplier);
    formData.append("DueDate", dueDate);
    formData.append("invoiceTotal", invoiceAmount);
    formData.append("invoice_Title", invoiceTitle);
    formData.append("invoicePaid", paidAmount);
    formData.append("invoiceStatus", selectedInvoiceStatus);
    formData.append("productUUID", selectedProduct);
    createAnInvoice(formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    onAddInvoice({
      supplierName,
      productName: "ACV Gummies",
      invoiceTitle,
      invoiceID: "105",
      invoiceDueDate: dueDate.toLocaleDateString(),
      invoiceTotal: `$${invoiceAmount}`,
      invoicePaid: `$${paidAmount}`,
      outstandingAmount: `${+invoiceAmount - +paidAmount}`,
      invoiceStatusTitle: capitalize(status),
      invoiceFile: invoiceFile[0]?.name || "No file uploaded",
      invoiceNotes: "See notes",
    });
    onHide();
  };

  useEffect(() => {
    gettingAllSuppliers();
  }, []);

  /**
   *
   * @param {on change of select in the form of create new invoice
   * it will get the supplier uuid of the selected Supplier} supplierUUID
   */
  const selectSupplier = (supplierUUID) => {
    setLoadingStatus(true);

    /**
     * getting the product of the selected supplier
     */
    const productsList = dbResponse.find(
      (supplier) => supplier.supplierUUID === supplierUUID
    );

    /**
     * adding the selected supplier product to the select of products
     * if the supp;ier have products then it will be display and if there is no product for
     * supplier then it will display no product found
     */

    if (productsList.Products.length > 0) {
      const productNames = productsList.Products.map((product) => ({
        label: product.productName,
        value: product.productUUID,
      }));
      createInvoiceFields[1].items = productNames;
      setFields([...createInvoiceFields]);

      //setting loading to false
      setLoadingStatus(false);
    } else {
      const notFound = [
        {
          label: "No Product Found",
          value: null,
        },
      ];
      createInvoiceFields[1].items = notFound;
      setFields([...createInvoiceFields]);
      setLoadingStatus(false);
    }
    //adding the selected supplier to state
    setSelectedSupplier(supplierUUID);
  };
  const selectProduct = (product) => {
    setSelectedProduct(product);
  };
  const selectStatus = (status) => {
    setSelectedInvoiceStatus(status);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loadingStatus === true ? (
        <Spinner />
      ) : (
        fields.map(({ name, label, onSelect, value, type, ...rest }, index) => (
          <Fragment key={index}>
            {type === "select" ? (
              <Controller
                control={control}
                name={name}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Select
                    key={index}
                    value={value}
                    label={label}
                    //here i am referencing the select function for each different select
                    //using an object key value i added their name here and
                    // then checking if the name of the fucntion matches then reference to the real functin
                    selectedValue={
                      onSelect === "selectSupplier"
                        ? selectSupplier
                        : onSelect === "selectProduct"
                        ? selectProduct
                        : selectStatus
                    }
                    onChange={onChange}
                    error={error}
                    {...rest}
                  />
                )}
              />
            ) : (
              <Input
                key={name}
                label={label}
                error={errors[name]?.message}
                type={type}
                {...register(name)}
                {...rest}
              />
            )}
          </Fragment>
        ))
      )}
      {/* <div style={{ width: "fit-content" }}>
        <Input
          onChange={fileChangedHandler}
          type="file"
          placeholder="Upload a New Picture"
        />
      </div> */}
      <SubmitButton>Create</SubmitButton>
    </form>
  );
};

export default CreateNewInvoice;
