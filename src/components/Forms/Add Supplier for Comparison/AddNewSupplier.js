import { useContext } from "react";
import moment from "moment";

import {
  InputTransparent,
  TextArea,
  Icon,
  LinkButton,
  SubmitButton,
  Hr,
  Spinner,
  Select,
  Input,
} from "components";
import { CalendarEventContext } from "store/calendarEventContext";
import * as S from "./styles";
import { fields, schema } from "./validations";
import { useFormWithYup } from "hooks";
import { useState } from "react";
import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { DrawerContext } from "store/drawerContext";
import {
  addNewSupplierforComp,
  getRatingDetails,
} from "APIs/Supplier Comparison/supplierComparison";
import { useEffect } from "react";
import { callSuccessToast } from "components/Toast/toast";
import { callErrorToast } from "components/Toast/toast";

const CreateNewNote = ({ onAddSupplier, comparisonUUID }) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [selectedRating, setSelectedRating] = useState();
  const { onHide } = useContext(DrawerContext);

  const onSubmit = (data, event) => {
    console.log(data);
    event.preventDefault();
    addNewSupplierforComp(
      comparisonUUID,
      selectedRating,
      data.companyName,
      data.website,
      data.email,
      data.productCost,
      data.productShippingCost,
      data.productOtherCost,
      data.productTotalCost,
      data.productSalePrice,
      data.productTotalCost - data.productSalePrice,
      data.packagingOption,
      data.leadTime,
      data.sampleInformation,
      data.comments
    )
      .then((result) => {
        if (result) {
          callSuccessToast("Created Successfully");
          onAddSupplier({
            rating: data.rating,
            companyName: data.companyName,
            website: data.website,
            email: data.email,
            productCost: `$${data.productCost}`,
            productShippingCost: `$${data.productShippingCost}`,
            productOtherCost: `$${data.productOtherCost}`,
            productTotalCost: `$${data.productTotalCost}`,
            productSalePrice: `$${data.productSalePrice}`,
            productExpectedRevenue: `$${
              data.productTotalCost - data.productSalePrice
            }`,
            packagingOption: data.packagingOption,
            leadTime: data.leadTime,
            sampleInformation: data.sampleInformation,
            comments: data.comments,
          });
          onHide();
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          onHide();
        }
      });
  };
  //getting all the rating API call
  const getAllRatingfromAPI = async () => {
    await getRatingDetails()
      .then((result) => {
        if (result.ratingList.length > 0) {
          const rating = result.ratingList.map((rate) => ({
            label: rate.title,
            value: rate.comparisonSupplierRatingUUID,
          }));
          fields[0].items = rating;
          setLoadingStatus(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllRatingfromAPI();
  }, []);

  const selectStatus = (status) => {
    setSelectedRating(status);
  };

  return (
    <>
      <S.Title>Add New Supplier</S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loadingStatus === true ? (
          <Spinner />
        ) : (
          fields.map(
            ({ name, label, onSelect, value, type, ...rest }, index) => (
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
                        selectedValue={selectStatus}
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
            )
          )
        )}
        <SubmitButton>Create</SubmitButton>
      </form>
    </>
  );
};

export default CreateNewNote;
