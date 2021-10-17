// import { useEffect } from "react";

// import { details, table } from "constants/components/supplier";
// import { OverviewTable, Icon } from "components";
// import * as S from "./styles";

// /**
//  * This component will be only use in Drawer as a content
//  * @param {string} supplierId Id to fetch supplier data
//  */
// const Supplier = ({ supplierId }) => {
//   useEffect(() => {
//     // This will be use to fetch
//     // supplier information from endpoints
//     // with {supplierId}
//   }, []);

//   return (
//     <S.Supplier>
//       <S.Title>AMA</S.Title>
//       <S.Image src="/assets/images/supplier-pic.png" alt="Supplier" />
//       {details.map((detail) => (
//         <S.Details key={detail.header}>
//           <S.DetailsTitle>{detail.header}</S.DetailsTitle>
//           {detail.rows.map((row) => (
//             <S.Detail key={row.title}>
//               <S.DetailTitle>{row.title}</S.DetailTitle>
//               <S.DetailDesc>{row.desc}</S.DetailDesc>
//             </S.Detail>
//           ))}
//         </S.Details>
//       ))}
//       <S.Title>Invoice Overview</S.Title>
//       <OverviewTable payload={table} />
//       <S.Title>Products</S.Title>
//       <S.Products>
//         <S.Product>Spatula</S.Product>
//         <S.Product>Spoons</S.Product>
//         <S.Product>Pans</S.Product>
//       </S.Products>
//       <S.Title>Notes</S.Title>
//       <S.Notes>
//         <S.Note>
//           I&apos;ve been working with this client for the past 3 months for consultin services. It
//           seem we&apos;ll continue to work together.
//         </S.Note>
//       </S.Notes>
//       <S.Title>Attachments</S.Title>
//       <S.Attachments>
//         <S.Attachment>
//           <Icon name="insert-drive-file" />
//           <S.AttachmentName>File for discussion - 1</S.AttachmentName>
//         </S.Attachment>
//         <S.Attachment>
//           <Icon name="insert-drive-file" />
//           <S.AttachmentName>file.pdf</S.AttachmentName>
//         </S.Attachment>
//       </S.Attachments>
//     </S.Supplier>
//   );
// };

// export default Supplier;

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
  FadedButton,
  Spinner,
} from "components";
import * as S from "./styles";
import axios from "axios";
import { fields, supplierFields, schema } from "./supplierSchema";
import React from "react";
import {
  getSupplierCompanyDetails,
  updateSupplierCompanyInfo,
} from "APIs/Supplier/supplierApi";

/**
 * This component will be only use in Drawer as a content
 * @param {string} supplierId Id to fetch supplier data
 */
const Supplier = ({ companyInfo, supplierId }) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [supplierUUID, setSupplierUUID] = useState(null);
  const [companyUUID, setCompanyUUID] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [imageURL, setImageURL] = useState("/assets/images/supplier-pic.png");

  //on form submission
  const onSubmit = async (data) => {
    await updateSupplierCompanyInfo(companyUUID, supplierUUID, data)
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

  const gettingCompanyDetails = async () => {
    await getSupplierCompanyDetails(companyInfo, supplierId).then(
      (response) => {
        resetInputData(response.companies, response.companies.Suppliers[0]);
        setCompanyUUID(response.companies.companyUUID);
        setCompanyName(response.companies.companyName);
        setSupplierUUID(response.companies.Suppliers[0].supplierUUID);
        setImageURL(response.companies.companyLogo);
      }
    );
  };

  useEffect(async () => {
    gettingCompanyDetails();
  }, []);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.selectProduct);
  };

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

    setLoadingData(false);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleChange1 = (selectedOptions) => {
    console.log("On Change");
    console.log(selectedOptions);
    // setSelectedOptions(selectedOptions);
  };

  const fileChangedHandler = async (event) => {
    const file = event.target.files[0];
    if (file.size > 1000000) {
      callErrorToast("File is to Big, Max Size is 1 MB");
    } else {
      const formData = new FormData();
      formData.append("Image", file);
      formData.append("supplierUUID", supplierUUID);
      formData.append("companyUUID", companyUUID);

      await axios
        .post("http://localhost:8521/company/uploadImage", formData, {
          onUploadProgress: (progressEvent) => {
            const percentage = parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
            callSuccessToast(`Uploading File ${percentage}%`);
          },
        })
        .then((res) => res.data)
        .then((response) => {
          console.log(response);
          if (response.type) {
            console.log(response.messages);
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

  const updateProductBTN = () => {
    console.log("updateProductBTN");
  };
  const updateNotesBTN = () => {
    console.log("updateNotesBTN");
  };

  //setting default image if the image src have any error then this image will be displayed
  const setDefaultImage = (event) =>
    (event.target.src = "/assets/images/supplier-pic.png");

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
              id="companyImage"
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
                    value={value === null ? undefined : value}
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
                      value={value === null ? undefined : value}
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
            <S.Product>Spatula</S.Product>
            <S.Product>Spoons</S.Product>
            <S.Product>Pans</S.Product>
          </S.Products>
          <ReactSelect
            options={options}
            isMulti
            handleChange={handleChange1}
            placeholder={"Please Select Products"}
            height={"50px"}
          />
          <FadedButton
            type="button"
            className="btn btn-small btn-success"
            onClick={updateProductBTN}
          >
            Update Products
          </FadedButton>
          <S.Title>Notes</S.Title>
          <S.Notes>
            <S.Note>
              I&apos;ve been working with this client for the past 3 months for
              consultin services. It seem we&apos;ll continue to work together.
            </S.Note>
          </S.Notes>

          <FadedButton
            type="button"
            className="btn btn-small btn-success"
            onClick={updateNotesBTN}
          >
            Update Notes
          </FadedButton>

          <S.Title>Attachments</S.Title>
          <S.Attachments>
            <S.Attachment>
              <Icon name="insert-drive-file" />
              <S.AttachmentName>File for discussion - 1</S.AttachmentName>
            </S.Attachment>
            <S.Attachment>
              <Icon name="insert-drive-file" />
              <S.AttachmentName>file.pdf</S.AttachmentName>
            </S.Attachment>
          </S.Attachments>
        </S.Supplier>
      )}
    </React.Fragment>
  );
};

export default Supplier;

//   return (
//     <form onSubmit={handleFormSubmission}>
//       <S.Supplier>
//         <S.Input defaultValue={"companyName"} id={"companyName"} />
//         <S.Title>AMA</S.Title>
//         <S.Image src="/assets/images/supplier-pic.png" alt="Supplier" />
//         {details.map((detail) => (
//           <S.Details key={detail.header}>
//             <S.DetailsTitle>{detail.header}</S.DetailsTitle>
//             {detail.rows.map((row) => (
//               <S.Detail key={row.title}>
//                 <S.DetailTitle>{row.title}</S.DetailTitle>
//                 <S.Input key={row.desc} defaultValue={row.desc} id={row.id} />
//               </S.Detail>
//             ))}
//           </S.Details>
//         ))}
//         <S.Title>Invoice Overview</S.Title>
//         <OverviewTable payload={table} />
//         <S.Title>Products</S.Title>
//         <Select
//           id={"selectProduct"}
//           closeMenuOnSelect={false}
//           // value={selectedOptions}
//           onChange={handleChange}
//           components={animatedComponents}
//           // defaultValue={[colourOptions[4], colourOptions[5]]}
//           isMulti
//           options={options}
//         />
//         <S.Title>Notes</S.Title>
//         <S.Notes>
//           <S.Note>
//             I&apos;ve been working with this client for the past 3 months for
//             consultin services. It seem we&apos;ll continue to work together.
//           </S.Note>
//         </S.Notes>
//         <S.Title>Attachments</S.Title>
//         <S.Attachments>
//           <S.Attachment>
//             <Icon name="insert-drive-file" />
//             <S.AttachmentName>File for discussion - 1</S.AttachmentName>
//           </S.Attachment>
//           <S.Attachment>
//             <Icon name="insert-drive-file" />
//             <S.AttachmentName>file.pdf</S.AttachmentName>
//           </S.Attachment>
//         </S.Attachments>
//       </S.Supplier>
//       <button type={"submit"}>Submit</button>
//     </form>
//   );
// };

// export default Supplier;
