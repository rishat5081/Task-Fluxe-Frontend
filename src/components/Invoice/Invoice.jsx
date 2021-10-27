import { useEffect, useState, Fragment, useContext } from "react";
import React from "react";
import { useFormWithYup } from "hooks";

import { details, table } from "constants/components/supplier";
import {
  OverviewTable,
  Icon,
  Spinner,
  Input,
  SubmitButton,
  Select,
  TextArea,
} from "components";
import * as S from "./styles";
import { fields, invoiceFields, schema } from "./invoiceSchema.jsx";
import { callErrorToast, callSuccessToast } from "components/Toast/toast";
import { Controller } from "react-hook-form";
import {
  getInvoiceDetails,
  updateInvoiceAPI,
  updateInvoiceFile,
} from "APIs/Invoice/invoice";
/**
 * This component will be only use in Drawer as a content
 * @param {string} invoiceUUID Id to fetch supplier data
 */
const Supplier = ({ invoiceUUID }) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const [loading, setLoading] = useState(true);
  const [invoiceSupplier, setInvoiceSupplier] = useState(false);
  const [invoiceProduct, setInvoiceProduct] = useState(false);
  const [invoicestatus, setInvoiceStatus] = useState(false);
  const [invoiceNotes, setInvoiceNotes] = useState(null);
  const [invoiceTitle, setInvoiceTitle] = useState(null);
  const [invoiceAttachment, setInvoiceAttachment] = useState(null);
  const [invoiceAttachmentPath, setInvoiceAttachmentPath] = useState(null);

  /**
   * getting the data from the API
   * and also changing it to the fields schema which is defined already
   */
  const getInvoiceData = async () => {
    await getInvoiceDetails(invoiceUUID)
      .then((result) => {
        if (result) {
          /**
           * //combining the status
           */

          let allStatus = [];
          allStatus.push({
            label: result.invoiceDetails.InvoiceStatus.invoiceStatusTitle,
            value: result.invoiceDetails.InvoiceStatus.invoiceStatusUUID,
          });
          if (result.allStatus.length > 0) {
            const status = result.allStatus.map((dbStatus) => ({
              label: dbStatus.invoiceStatusTitle,
              value: dbStatus.invoiceStatusUUID,
            }));
            allStatus.push(...status);
          }
          //adding all the status to the drop down
          fields[6].items = allStatus;
          /**
           * //combining the Products
           */
          let allProducts = [];
          allProducts.push({
            label: result.invoiceDetails.Product.productName,
            value: result.invoiceDetails.Product.productUUID,
          });
          if (result.allProducts.length > 0) {
            const products = result.allProducts.map((product) => ({
              label: product.productName,
              value: product.productUUID,
            }));
            allProducts.push(...products);
          }

          //adding all the product to the drop down
          fields[1].items = allProducts;
          /**
           * //combining the Products
           */
          let allSupplier = [];
          allSupplier.push({
            label: result.invoiceDetails.Supplier.supplierName,
            value: result.invoiceDetails.Supplier.supplierUUID,
          });
          if (result.allSupplier.length > 0) {
            const suppliers = result.allSupplier.map((supplier) => ({
              label: supplier.supplierName,
              value: supplier.supplierUUID,
            }));
            allSupplier.push(...suppliers);
          }
          //adding all the supplier to the drop down
          fields[0].items = allSupplier;

          // setting all the values to the schema
          Object.keys(fields).forEach(function eachKey(key) {
            for (const key_1 in result.invoiceDetails) {
              if (fields[key].name === key_1) {
                fields[key].value = result.invoiceDetails[key_1];
              }
            }
          });
          setInvoiceTitle(result.invoiceDetails.invoiceTitle);
          setInvoiceSupplier(result.invoiceDetails.Supplier.supplierUUID);
          setInvoiceProduct(result.invoiceDetails.Product.productUUID);
          setInvoiceStatus(
            result.invoiceDetails.InvoiceStatus.invoiceStatusUUID
          );
          setInvoiceNotes(result.invoiceDetails.invoiceNotes);

          setInvoiceTitle(result.invoiceDetails.invoiceTitle);
          setInvoiceAttachment(result.invoiceDetails.invoiceFileTitle);
          setInvoiceAttachmentPath(result.invoiceDetails.invoiceFile);

          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  /**
   * use Effects when the function is loads
   */
  useEffect(() => {
    getInvoiceData();
  }, []);

  /**
   *
   * @param {object containing the form information of the invoice} data
   * here the submit form function is called
   *
   */
  //on form submission for the supplier and company information
  const onSubmit = async (data) => {
    setLoading(true);

    //setting the data to the API and updating the record in the database
    await updateInvoiceAPI(
      invoiceSupplier,
      invoiceProduct,
      invoicestatus,
      data.invoiceDueDate,
      data.invoicePaid,
      data.invoiceTitle,
      data.invoiceTotal,
      invoiceNotes,
      invoiceUUID
    )
      .then((response) => {
        if (response) {
          console.log(response);
          callSuccessToast("Successfully Updated");
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          callErrorToast("Error Updating Information");
        }
      });
  };

  //uploading image to the server and updating
  const fileChangedHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLoading(true);
    const file = event.target.files[0];
    const types = /pdf/;
    const fileBreakdown = file.type.split("/");
    const extnames = types.test(fileBreakdown[1].toLowerCase());

    if (file.size > 10000000) {
      callErrorToast("File is to Big, Max Size is 10 MB");
    }
    if (!extnames) {
      callErrorToast("Only JPG, JPEG, PNG are Allowed.");
    } else {
      const formData = new FormData();
      formData.append("Invoice - ", file);
      formData.append("invoiceUUID", invoiceUUID);

      await updateInvoiceFile(formData)
        .then((response) => {
          if (response.type) {
            callErrorToast(response.messages);
            return;
          } else {
            console.log(response.filePath);
            console.log(response);

            setInvoiceAttachment(response.fileName);
            setInvoiceAttachmentPath(response.filePath);
            callSuccessToast(`File Uploading Successfully`);
            setLoading(false);
            return;
          }
        })
        .catch((error) => {
          console.log(error);
          if (error) {
            callErrorToast(error);
          }
        });
    }
  };

  /**
   *
   * @param {on change of select in the form of create new invoice
   * it will get the supplier uuid of the selected Supplier} supplierUUID
   */
  const selectSupplier = (supplierUUID) => {
    setLoading(true);

    setInvoiceSupplier(supplierUUID);
    setLoading(false);
  };
  const selectProduct = (product) => {
    setLoading(true);

    setInvoiceProduct(product);
    setLoading(false);
  };
  const selectStatus = (status) => {
    setLoading(true);

    setInvoiceStatus(status);
    setLoading(false);
  };
  const onAddTextArea = (event) => {
    setLoading(true);
    setInvoiceNotes(event.target.value);
    setLoading(false);
    //adding text to the note state
  };

  return (
    <React.Fragment>
      <div style={{ width: "75%" }}>
        {loading === true ? (
          <Spinner />
        ) : (
          <S.Invoice>
            <S.Title>
              {invoiceTitle === null ? "No Invoice Title" : invoiceTitle}
            </S.Title>

            <form onSubmit={handleSubmit(onSubmit)}>
              {loading === true ? (
                <Spinner />
              ) : (
                fields.map(
                  ({ id, name, label, onSelect, value, type, ...rest }) => (
                    <Fragment key={label}>
                      {type === "select" ? (
                        <Controller
                          control={control}
                          name={name}
                          value={value}
                          render={({
                            field: { onChange, value },
                            fieldState: { error },
                          }) => (
                            <Select
                              value={value}
                              label={label}
                              onChange={onChange}
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
                              error={error}
                              {...rest}
                            />
                          )}
                        />
                      ) : (
                        <Input
                          style={{
                            color: "#2C7BE5",
                            fontWeight: 500,
                          }}
                          key={name}
                          value={value === null ? "" : value}
                          label={label}
                          error={errors[name]?.message}
                          type={type}
                          {...register(name)}
                          {...rest}
                        />
                      )}
                    </Fragment>
                  )
                )
              )}
              <S.DetailsTitle>Notes</S.DetailsTitle>
              <S.Notes>
                <TextArea
                  placeholder="Type your notes here"
                  defaultValue={invoiceNotes === null ? "" : invoiceNotes}
                  onBlur={onAddTextArea}
                ></TextArea>
              </S.Notes>
              <SubmitButton>Create</SubmitButton>
            </form>

            <S.Title>{"Invoice Attachment"}</S.Title>

            <S.Attachments>
              {invoiceAttachment === null ? (
                "You Don't any Attachment"
              ) : (
                <S.Attachment>
                  <Icon name="insert-drive-file" />
                  <S.AttachmentName
                    href={invoiceAttachmentPath}
                    target="_blank"
                  >
                    {invoiceAttachment}
                  </S.AttachmentName>
                </S.Attachment>
              )}
            </S.Attachments>

            <div style={{ width: "fit-content", margin: "50px 0px" }}>
              <S.DetailsTitle>Upload a New Attachment</S.DetailsTitle>
              <Input
                onChange={fileChangedHandler}
                type="file"
                placeholder="Upload a New Invoice"
              />
            </div>
          </S.Invoice>
        )}
      </div>
    </React.Fragment>
  );
};

export default Supplier;
