import { Fragment, useContext } from "react";
import { Controller } from "react-hook-form";

import { useFormWithYup } from "hooks";
import { Input, SubmitButton, Select } from "components";
import { capitalize } from "utils";
import { schema, fields } from "./validations";
import { ModalContext } from "store/modalContext";

const CreateNewInvoice = ({ onAddInvoice }) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const { onHide } = useContext(ModalContext);

  const onSubmit = (data) => {
    const { supplierName, dueDate, invoiceAmount, paidAmount, status, attachment } = data;
    onAddInvoice({
      col1: supplierName,
      col2: "ACV Gummies",
      col3: "Invoice",
      col4: "105",
      col5: dueDate.toLocaleDateString(),
      col6: `$${invoiceAmount}`,
      col7: `$${paidAmount}`,
      col8: capitalize(status),
      col9: attachment[0]?.name || "No file uploaded",
      col10: "See notes",
    });
    onHide();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map(({ name, label, type, ...rest }) => (
        <Fragment key={name}>
          {type === "select" ? (
            <Controller
              control={control}
              name={name}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select value={value} label={label} onChange={onChange} error={error} {...rest} />
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
      <SubmitButton>Create</SubmitButton>
    </form>
  );
};

export default CreateNewInvoice;
