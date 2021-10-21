import { Fragment, useContext, useEffect, useState } from "react";
import { Controller } from "react-hook-form";

import { useFormWithYup } from "hooks";
import { Input, SubmitButton, Select, Spinner } from "components";
import { capitalize } from "utils";
import { schema, createInvoiceFields } from "./validations";
import { ModalContext } from "store/modalContext";
import { getAllSupplier_Name } from "APIs/Supplier/supplierApi";
import { callErrorToast } from "components/Toast/toast";
import { callSuccessToast } from "components/Toast/toast";
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
  const [loadingStatus, setLoadingStatus] = useState(true);
  /**
   *
   *   //end of states
   */
  const gettingAllSuppliers = async () => {
    await getAllSupplier_Name()
      .then((response) => {
        if (response) {
          // const aaa = response.supplierInfo.flat(Infinity);
          // console.log(aaa);
          const supplierNames = response.supplierInfo.map((supplier) => ({
            label: supplier.supplierName,
            value: supplier.supplierUUID,
          }));

          const InvoiceStatus = response.InvoiceStatus.map((invoiceStatus) => ({
            label: invoiceStatus.invoiceTitle,
            color: invoiceStatus.invoiceStatusColor,
            value: invoiceStatus.invoiceStatusUUID,
          }));

          createInvoiceFields[0].items = supplierNames;
          createInvoiceFields[4].items = InvoiceStatus;
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
  const onSubmit = (data) => {
    console.log(data);
    const {
      supplierName,
      dueDate,
      invoiceAmount,
      paidAmount,
      status,
      invoiceFile,
      productName,
    } = data;
    // const formData = new FormData();
    // formData.append("Attachment", invoiceFile[0]);
    // formData.append("supplierName", supplierName);
    // formData.append("dueDate", dueDate);
    // formData.append("invoiceAmount", invoiceAmount);
    // formData.append("paidAmount", paidAmount);
    // // formData.append("status", status);
    // // formData.append("productName", productName);

    // console.log("formData", formData);

    console.log(invoiceFile[0]);
    const formData = new FormData();
    formData.append("Attachment", invoiceFile[0]);
    formData.append("suppldfgdfgierUUID", invoiceAmount);
    formData.append("companygdfUUID", status);

    axios({
      method: "POST",
      baseURL: "http://localhost:8521",
      url: "/invoice/createInvoice",
      data: formData,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // const {
    //   supplierName,
    //   dueDate,
    //   invoiceAmount,
    //   paidAmount,
    //   status,
    //   invoiceFile,
    // } = data;
    // onAddInvoice({
    //   col1: supplierName,
    //   col2: "ACV Gummies",
    //   col3: "Invoice",
    //   col4: "105",
    //   col5: dueDate.toLocaleDateString(),
    //   col6: `$${invoiceAmount}`,
    //   col7: `$${paidAmount}`,
    //   col8: capitalize(status),
    //   col9: invoiceFile[0]?.name || "No file uploaded",
    //   col10: "See notes",
    // });
    onHide();
  };

  // const fileChangedHandler = async (event) => {
  //   ev;
  //   const file = event.target.files[0];
  //   const types = /jpeg|jpg|png|gif/;
  //   const fileBreakdown = file.type.split("/");
  //   const extnames = types.test(fileBreakdown[1].toLowerCase());

  //   // if (file.size > 1000000) {
  //   //   callErrorToast("File is to Big, Max Size is 1 MB");
  //   // }
  //   // if (!extnames) {
  //   //   callErrorToast("Only JPG, JPEG, PNG are Allowed.");
  //   // } else {

  //   const formData = new FormData();
  //   formData.append("Attachment", file);
  //   formData.append("supplierUUID", "supplierUUID");
  //   formData.append("companyUUID", "companyUUID");

  //   axios({
  //     method: "POST",
  //     baseURL: "http://localhost:8521",
  //     url: "/invoice/createInvoice",
  //     data: formData,
  //   })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));

  //   // await uploadCompanyImage(formData)
  //   //   .then((response) => {
  //   //     if (response.type) {
  //   //       callErrorToast(response.messages);
  //   //       return;
  //   //     } else {
  //   //       console.log(response.filePath);
  //   //       setImageURL(response.filePath);
  //   //       callSuccessToast(`File Uploading Successfully`);
  //   //       return;
  //   //     }
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //     if (error) {
  //   //       callErrorToast(error);
  //   //     }
  //   //   });
  //   // }
  // };

  useEffect(() => {
    gettingAllSuppliers();
  }, []);

  const selectSupplier = (supplierUUID) => {
    console.log("supplierUUID: ", supplierUUID);
    setLoadingStatus(true);
    // console.log(dbResponse);
    const productsList = dbResponse.find(
      (supplier) => supplier.supplierUUID === supplierUUID
    );

    const productNames = productsList.Products.map((product) => ({
      label: product.productName,
      value: product.productUUID,
    }));
    createInvoiceFields[1].items = productNames;
    setFields([...createInvoiceFields]);

    console.log("Values Selected", productNames);
    setLoadingStatus(false);
    // setSelectedCompanyUUID(companyUUID);
  };
  const selectProduct = (product) => {
    console.log("product: ", product);
    // setLoadingStatus(true);
    // // console.log(dbResponse);
    // const productsList = dbResponse.find(
    //   (supplier) => supplier.supplierUUID === supplierUUID
    // );
    // const productNames = productsList.Products.map((product) => ({
    //   label: product.productName,
    //   value: product.productUUID,
    // }));
    // createInvoiceFields[1].items = productNames;
    // setFields(createInvoiceFields);
    // console.log("Values Selected", productNames);
    // setLoadingStatus(false);
    // setSelectedCompanyUUID(companyUUID);
  };
  const selectStatus = (Status) => {
    console.log("Status: ", Status);
    // setLoadingStatus(true);
    // // console.log(dbResponse);
    // const productsList = dbResponse.find(
    //   (supplier) => supplier.supplierUUID === supplierUUID
    // );

    // const productNames = productsList.Products.map((product) => ({
    //   label: product.productName,
    //   value: product.productUUID,
    // }));
    // createInvoiceFields[1].items = productNames;
    // setFields(createInvoiceFields);

    // console.log("Values Selected", productNames);
    // setLoadingStatus(false);
    // setSelectedCompanyUUID(companyUUID);
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
                        : selectSupplier || onSelect === "selectProduct"
                        ? selectProduct
                        : selectProduct || onSelect === "selectStatus"
                        ? selectStatus
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
