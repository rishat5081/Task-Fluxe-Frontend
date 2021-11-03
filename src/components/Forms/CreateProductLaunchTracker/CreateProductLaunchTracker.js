import { Fragment, useContext } from "react";
import { Controller } from "react-hook-form";

import { useFormWithYup } from "hooks";
import { Input, SubmitButton, Select, Toast, Spinner } from "components";
import { callSuccessToast, callErrorToast } from "../../Toast/toast";
import { schema, fields_1 } from "./validations";
import { ModalContext } from "store/modalContext";
import { useState, useEffect } from "react";
import {
  getCompanyNames,
  getCompanyNamesSuucess,
  getCompanyNamesError,
} from "APIs/apis";
import {
  addSupplierAPi,
  onFailedSupplier,
  onSuccessSupplier,
} from "APIs/Supplier/supplierApi";
import * as S from "./styles";
import {
  addExistingProducttoLanch,
  addNewProducttoLanch,
  getProductList,
} from "APIs/Product Launch/productLaunch";

const CreateNewSupplier = ({ onAddProduct }) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const { onHide } = useContext(ModalContext);
  const [fields, setFields] = useState([]);
  const [fieldsLoading, setFieldsLoading] = useState(true);
  const [newProductDiv, setNewProductDiv] = useState(false);
  const [existingProductDiv, setExistingProductDiv] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [newProductName, setNewProductName] = useState();

  //on form submission
  const onSubmit = async () => {
    addExistingProducttoLanch(selectedProduct)
      .then((result) => result)
      .then((response) => {
        if (response) {
          onAddProduct(response.result, {
            productLaunchStatusTitle: "In Progress",
          });
          onHide();
        }
      })
      .catch((err) => {
        if (err) {
          callErrorToast("Error Creating Product Launch");
          console.log(err);
          onHide();
        }
      });
  };
  const createNewProductBTN = async (data) => {
    addNewProducttoLanch(newProductName)
      .then((result) => result.result)
      .then((response) => {
        if (response) {
          onAddProduct(response, {
            productLaunchStatusTitle: "In Progress",
          });
          onHide();
        }
      })
      .catch((err) => {
        if (err) {
          callErrorToast("Error Creating Product Launch");
          console.log(err);
          onHide();
        }
      });
  };

  const selectProduct = (productUUID) => {
    console.log(productUUID);
    setSelectedProduct(productUUID);
    // setSelectedProductUUID(companyUUID);
  };

  const callCompanyNameAPI = async () => {
    try {
      //calling an api for the company names
      await getProductList()
        .then((dbResponse) => dbResponse.productList)
        .then((response) => {
          if (response.length > 0) {
            const names = response.map((product) => ({
              label: product.productName,
              value: product.productUUID,
            }));
            fields_1[0].items = names;
            setFields(fields_1);
            // setCompanyData(names);
            // callSuccessToast(getCompanyNamesSuucess);
            setFieldsLoading(false);
            return true;
          } else {
            setFieldsLoading(true);
            callErrorToast("No Company Found");
          }
        })
        .catch((error) => {
          if (error) {
            console.log(error);
            setFieldsLoading(true);
            callErrorToast("getCompanyNamesError");
            onHide();
          }
        });
    } catch (error) {
      console.error("Error: ", error);
      setFieldsLoading(true);
      callErrorToast("getCompanyNamesError");
      onHide();
    }
  };

  // use effect used for loading the companies names from the API
  useEffect(async () => {
    await callCompanyNameAPI();
  }, []);
  const onChangeValue = (event) => {
    if (event.target.value === "New") {
      setNewProductDiv(true);
      setExistingProductDiv(false);
    } else {
      setNewProductDiv(false);
      setExistingProductDiv(true);
    }
  };
  const newProductonChange = (event) => {
    setNewProductName(event.target.value);
  };

  return (
    <>
      {fieldsLoading === true ? (
        <Spinner />
      ) : (
        <>
          <S.RadioButtonDIV onChange={onChangeValue}>
            <div>
              <S.RadioButton type="radio" value="Exisiting" name="gender" />{" "}
              Exisiting Product
              <S.RadioButton type="radio" value="New" name="gender" /> New
              Product
            </div>
          </S.RadioButtonDIV>

          {newProductDiv === false ? (
            ""
          ) : (
            <div>
              <S.Label> Enter New Product Name</S.Label>{" "}
              <S.Input onChange={newProductonChange} />
              <SubmitButton onClick={createNewProductBTN}>Create</SubmitButton>
            </div>
          )}
          {existingProductDiv === false ? (
            ""
          ) : (
            <>
              {fields.map(({ name, label, value, type, ...rest }) => (
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
                          selectedValue={selectProduct}
                          error={error}
                          {...rest}
                        />
                      )}
                    />
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}
              <SubmitButton onClick={onSubmit}>Create</SubmitButton>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CreateNewSupplier;
