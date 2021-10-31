import { DashboardLayout } from "layouts";
import {
  Table,
  TableLink,
  EditableText,
  Spinner,
  TextArea,
  Select,
  Input,
  Topbar,
  Icon,
  Forms,
} from "components";
import { comparisonDetails, table } from "constants/pages/comparisonSupplier";
import * as S from "./styles";
import { useEffect } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import { useState } from "react";
import {
  getSupplierComparisonDetails,
  updateComparisonDetails,
} from "APIs/Supplier Comparison/supplierComparison";
import { fields_1 } from "./validations";
import { Controller } from "react-hook-form";
import { Fragment } from "react";
import { useFormWithYup } from "hooks";
import { schema } from "components/Supplier/supplierSchema";
import { useContext } from "react";
import { DrawerContext } from "store/drawerContext";
import { callErrorToast } from "components/Toast/toast";
import { callSuccessToast } from "components/Toast/toast";

const ComparisonSupplier = ({
  location: {
    state: { productInfo },
  },
}) => {
  const { onShow: showModal } = useContext(DrawerContext);
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [compTitle, setCompTitle] = useState();
  const [comparisonDescription, setComparisonDescription] = useState();
  const [comparisonStatus, setComparisonStatus] = useState();
  const [comparisonUUID, setComparisonUUID] = useState();

  let { id } = useParams();

  const history = useHistory();
  // console.log(id);
  const colors = {
    yes: "#01BF80",
    maybe: "#F9B515",
    no: "#BF0101",
  };

  const tableData = table.data.map((el) => {
    return {
      ...el,
      col1: (
        <span style={{ color: colors[el.col1.toLowerCase()] }}>{el.col1}</span>
      ),
      col3: <TableLink>{el.col3}</TableLink>,
    };
  });
  //validating the page and getting the respose from the server
  //getting all the information of the page from this function
  const validatePage = async () => {
    await getSupplierComparisonDetails(productInfo.comparisonUUID)
      .then((result) => {
        let allStatus = [];
        if (result.comparisonDetails.ComparisonRating === null) {
        } else {
          allStatus.push({
            label: result.comparisonDetails.ComparisonRating.title,
            value:
              result.comparisonDetails.ComparisonRating.comparisonRatingUUID,
          });
        }

        if (result.allRatings.length > 0) {
          const status = result.allRatings.map((dbStatus) => ({
            label: dbStatus.title,
            value: dbStatus.comparisonRatingUUID,
          }));
          allStatus.push(...status);
        }
        //adding all the status to the drop down
        fields_1[0].items = allStatus;

        setComparisonDescription(
          result.comparisonDetails.comparisonDescription
        );
        setCompTitle(result.comparisonDetails.comparisonTitle);
        setLoadingStatus(false);
        return true;
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          callErrorToast("Error Getting Details");
          return false;
        }
      });
  };
  //on reload of the page
  useEffect(() => {
    validatePage();
    setComparisonUUID(productInfo.comparisonUUID);
  }, []);

  const onAddTextArea = (event) => {
    setComparisonDescription(event.target.value);
  };
  const selectedStatus = (selectedStatusUUID) => {
    console.log(selectedStatusUUID);
    setComparisonStatus(selectedStatusUUID);
  };
  const enteredTitle = (event) => {
    setCompTitle(event.target.value);
  };
  const updateFields_BTN = async () => {
    if (
      (compTitle,
      comparisonDescription,
      comparisonStatus === null || compTitle,
      comparisonDescription,
      comparisonStatus === undefined)
    )
      callErrorToast("All Fields are required");
    else {
      await updateComparisonDetails(
        comparisonUUID,
        compTitle,
        comparisonDescription,
        comparisonStatus
      )
        .then((result) => {
          if (result) {
            callSuccessToast("Updated");
          }
        })
        .catch((err) => {
          if (result) {
            callErrorToast("Error Updating");
          }
        });
    }
    // console.log(compTitle, comparisonDescription, comparisonStatus);
  };
  const addComparisonProduct = (event) => {
    console.log(event.target.value);
  };
  const topbarAction = () => {
    showModal({
      content: <Forms.CreateNewNote onAddProduct={addComparisonProduct} />,
    });
  };
  return (
    <>
      {loadingStatus === true ? (
        <Spinner />
      ) : (
        <DashboardLayout title={`Supplier Comparison for ${compTitle}`}>
          <S.ComparisonSupplier>
            <S.ComparisonDetail>
              <S.Title>Product Name</S.Title>
              <S.DescWrapper>
                <input
                  placeholder="Product name.."
                  onChange={enteredTitle}
                  defaultValue={compTitle}
                />
              </S.DescWrapper>
            </S.ComparisonDetail>
            <S.ComparisonDetail>
              <S.Title>Comments</S.Title>
              <TextArea
                placeholder="Type your notes here"
                defaultValue={comparisonDescription}
                onBlur={onAddTextArea}
              ></TextArea>
            </S.ComparisonDetail>
            {fields_1.map(({ name, label, value, type, ...rest }) => (
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
                        selectedValue={selectedStatus}
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
            ))}
            <button
              className="btn btn-primary btn-sm mt-5"
              onClick={updateFields_BTN}
            >
              {" "}
              Update
            </button>
          </S.ComparisonSupplier>
          <S.Action onClick={topbarAction}>
            <Icon name="add-filled" />
            Add New Supplier
          </S.Action>
          <Table payload={{ data: tableData, columns: table.columns }} noWrap />
        </DashboardLayout>
      )}
    </>
  );
};

export default ComparisonSupplier;
