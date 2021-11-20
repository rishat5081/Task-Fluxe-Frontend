import { useEffect, useState, Fragment, useContext } from "react";
import { table } from "./supplier_data";
import { useFormWithYup } from "hooks";
import { callSuccessToast, callErrorToast } from "../Toast/toast";
import {
  OverviewTable,
  Icon,
  ReactSelect,
  SubmitButton,
  Input,
  Spinner,
  TextArea,
} from "components";
import * as S from "./styles";
import { fields, supplierFields, schema } from "./supplierSchema";
import React from "react";
import {
  addFilestoSupplier,
  addNotestoSupplier,
  addProducttoSupplier,
  deleteAttachment,
  getSupplierCompanyDetails,
  updateSupplierCompanyInfo,
} from "APIs/Supplier/supplierApi";
import { uploadCompanyImage } from "APIs/apis";

/**
 * This component will be only use in Drawer as a content
 * @param {string} supplierId Id to fetch supplier data
 */
const Supplier = ({ id, companyInfo, supplierId }) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [supplierProducts, setSupplierProducts] = useState(null);
  const [companyProducts, setCompanyProducts] = useState(true);
  const [companyNotes, setCompanyNotes] = useState(true);
  const [supplierFiles, setSupplierFiles] = useState(true);
  const [loadingData, setLoadingData] = useState(true);
  const [supplierUUID, setSupplierUUID] = useState(null);
  const [companyUUID, setCompanyUUID] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [imageURL, setImageURL] = useState("/assets/images/supplier-pic.png");

  //on form submission for the supplier and company information
  const onSubmit = async (data) => {
    //setting the data to the API and updating the record in the database
    await updateSupplierCompanyInfo(companyUUID, supplierUUID, data, id)
      .then((response) => {
        if (response) {
          callSuccessToast("Successfully Updated");
        }
      })
      .catch((error) => {
        if (error) {
          callErrorToast("Error Updating Information");
        }
      });
  };

  //getting the API response
  const gettingCompanyDetails = async () => {
    await getSupplierCompanyDetails(companyInfo, supplierId, id)
      .then((response) => response.companies)
      .then((companies) => {
        // console.log(companies);
        resetInputData(companies, companies.Suppliers[0]);
        setCompanyUUID(companies.companyUUID);
        setCompanyName(companies.companyName);

        setSupplierUUID(companies.Suppliers[0].supplierUUID);
        setCompanyNotes(companies.Suppliers[0].supplierNote);
        setSupplierProducts(companies.Suppliers[0].Products);
        setSupplierFiles(companies.Suppliers[0].SupplierFiles);
        setImageURL(companies.companyLogo);

        //changeing the product UUID and name to label and value because of the React select doc
        const products = companies.Products.map((product) => ({
          value: product.productUUID,
          label: product.productName,
        }));

        setCompanyProducts(products);

        setLoadingData(false);
      });
  };

  //on load calling the api
  useEffect(async () => {
    gettingCompanyDetails();
  }, []);

  //here the fields are getting updated as per the API response
  const resetInputData = (company, supplier) => {
    //here we are changing the fields of the company details
    Object.keys(fields).forEach(function eachKey(key) {
      for (const key_1 in company) {
        if (fields[key].name === key_1) {
          fields[key].value = company[key_1];
        }
      }
    });

    //here we will change details of the supplier
    Object.keys(supplierFields).forEach(function eachKey(key) {
      for (const key_1 in supplier) {
        if (supplierFields[key].name === key_1) {
          supplierFields[key].value = supplier[key_1];
        }
      }
    });
  };

  const handleChange = (selectedOptions) => {
    setSelectedProducts(selectedOptions);
  };

  //uploading image to the server and updating
  const fileChangedHandler = async (event) => {
    const file = event.target.files[0];
    const types = /jpeg|jpg|png|gif/;
    const fileBreakdown = file.type.split("/");
    const extnames = types.test(fileBreakdown[1].toLowerCase());

    if (file.size > 1000000) {
      callErrorToast("File is to Big, Max Size is 1 MB");
    }
    if (!extnames) {
      callErrorToast("Only JPG, JPEG, PNG are Allowed.");
    } else {
      const formData = new FormData();
      formData.append("Image", file);
      formData.append("supplierUUID", supplierUUID);
      formData.append("companyUUID", companyUUID);
      formData.append("id", id);

      await uploadCompanyImage(formData)
        .then((response) => {
          if (response.type) {
            callErrorToast(response.messages);
            return;
          } else {
            console.log(response.filePath);
            setImageURL(response.filePath);
            callSuccessToast(`File Uploading Successfully`);
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

  const updateProductBTN = async () => {
    await addProducttoSupplier(supplierUUID, selectedProducts, id)
      .then((res) => {
        if (res === "Successfully Added") {
          callSuccessToast(res);
          const newProductArray = selectedProducts.map((product) => ({
            productName: product.label,
          }));
          const newProducts = [...supplierProducts, ...newProductArray];
          setSupplierProducts(newProducts);
        }
      })
      .catch((err) => {
        if (err) {
          callErrorToast("Error Adding Product");
          return;
        }
      });
  };
  const onAddTextArea = (event) => {
    //adding text to the note state
    setCompanyNotes(event.target.value);
  };

  //submitting the note to the server through the API
  const updateNotesBTN = async () => {
    await addNotestoSupplier(supplierUUID, companyNotes, id)
      .then((response) => {
        if (response) {
          console.log(response);
          callSuccessToast(response);
          return;
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          callErrorToast(err);
          return;
        }
      });
  };

  // uploading the files to the db
  const uploadAttachment = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const types = /pdf/;
    const fileBreakdown = file.type.split("/");
    const extnames = types.test(fileBreakdown[1].toLowerCase());

    if (file.size > 1000000) {
      callErrorToast("File is to Big, Max Size is 1 MB");
    }
    if (!extnames) {
      callErrorToast("Only PDF is Allowed.");
    } else {
      const formData = new FormData();
      formData.append("Attachment", file);
      formData.append("supplierUUID", supplierUUID);
      formData.append("companyUUID", companyUUID);
      formData.append("id", id);

      await addFilestoSupplier(formData)
        .then((response) => {
          if (response.type) {
            callErrorToast(response.messages);
            return;
          } else {
            const newFiles = [
              ...supplierFiles,
              { fileTitle: response.fileTitle, filePath: response.filePath },
            ];
            setSupplierFiles(newFiles);
            callSuccessToast(`File Uploading Successfully`);
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
  //setting default image if the image src have any error then this image will be displayed
  const setDefaultImage = (event) =>
    (event.target.src = "/assets/images/supplier-pic.png");

  //removing the attachment
  const removeAttachment = async (fileUUID) => {
    setLoadingData(true);

    await deleteAttachment(fileUUID)
      .then((result) => {
        if (result.status === "success") {
          callSuccessToast(result.message);
          const filteredFiles = supplierFiles.filter(
            (file) => file.fileUUID !== fileUUID
          );
          setSupplierFiles(filteredFiles);
          setLoadingData(false);
        }
      })
      .catch((err) => {
        if (err.status === "error") callErrorToast(err.message);
      });
  };

  return (
    <React.Fragment>
      {loadingData === true ? (
        <Spinner />
      ) : (
        <S.Supplier>
          <S.Title>{companyName ? companyName : "No Company Name"}</S.Title>
          <S.Image src={imageURL} alt="Supplier" onError={setDefaultImage} />
          <div style={{ width: "fit-content" }}>
            <Input
              onChange={fileChangedHandler}
              type="file"
              placeholder="Upload a New Picture"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.DetailsTitle> Compnay Details</S.DetailsTitle>
            {fields.length < 0 ? (
              <Spinner />
            ) : (
              fields.map(({ id, name, label, value, type, ...rest }, index) => (
                <Fragment key={index}>
                  <Input
                    style={{
                      width: "50%",
                      color: "#2C7BE5",
                      fontWeight: 500,
                    }}
                    key={id}
                    value={value === null ? "" : value}
                    label={label}
                    error={errors[name]?.message}
                    type={type}
                    {...register(name)}
                    {...rest}
                  />
                </Fragment>
              ))
            )}
            <S.DetailsTitle> Contact Details</S.DetailsTitle>
            {supplierFields.length < 0 ? (
              <Spinner />
            ) : (
              supplierFields.map(
                ({ id, name, label, value, type, ...rest }, index) => (
                  <Fragment key={index}>
                    <Input
                      style={{
                        width: "50%",
                        color: "#2C7BE5",
                        fontWeight: 500,
                      }}
                      key={id}
                      value={value === null ? "" : value}
                      label={label}
                      error={errors[name]?.message}
                      type={type}
                      {...register(name)}
                      {...rest}
                    />
                  </Fragment>
                )
              )
            )}

            <SubmitButton>Update</SubmitButton>
          </form>

          <S.Title>Invoice Overview</S.Title>
          <OverviewTable payload={table} />
          <S.Title>Products</S.Title>
          <S.Products>
            {supplierProducts.length === 0
              ? "You Don't any Products"
              : supplierProducts.map(({ productName }, index) => (
                  <S.Product key={index}>{productName}</S.Product>
                ))}
          </S.Products>
          <ReactSelect
            options={companyProducts}
            isMulti
            handleChange={handleChange}
            placeholder={"Please Select Products"}
            height={"50px"}
          />
          <S.FadedButton type="button" onClick={updateProductBTN}>
            Add Products
          </S.FadedButton>
          <S.Title>Notes</S.Title>
          <S.Notes>
            <TextArea
              placeholder="Type your notes here"
              defaultValue={companyNotes}
              onBlur={onAddTextArea}
            ></TextArea>
          </S.Notes>
          <S.FadedButton type="button" onClick={updateNotesBTN}>
            Update Notes
          </S.FadedButton>

          <S.Title>Attachments</S.Title>

          <div style={{ width: "100%" }}>
            <Input
              onChange={uploadAttachment}
              type="file"
              placeholder="Upload a New File"
            />
          </div>
          <S.Attachments>
            {supplierFiles.length === 0
              ? "You Don't any Products"
              : supplierFiles.map(
                  ({ filePath, fileUUID, fileTitle }, index) => (
                    <S.Attachment key={index}>
                      <Icon name="insert-drive-file" />
                      <S.AttachmentName href={filePath} target="_blank">
                        {fileTitle}
                      </S.AttachmentName>
                      <div
                        className="ml-5"
                        style={{ marginLeft: "10px", color: "red" }}
                        onClick={() => removeAttachment(fileUUID)}
                      >
                        <Icon name="close" />
                      </div>
                    </S.Attachment>
                  )
                )}
          </S.Attachments>
        </S.Supplier>
      )}
    </React.Fragment>
  );
};

export default Supplier;
