import { Input, NavigationBar, Select, SubmitButton } from "components";
import { useFormWithYup } from "hooks";
import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { schema, fields_1 } from "./validations";

const Login = () => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);

  const onSubmit = (data) => {
    console.log("Login ::: ", data);
  };
  return (
    <>
      <div className="outer">
        <div className="inner">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                        // selectedValue={selectedCompany}
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
            <div className="text-center">
              <SubmitButton>Login</SubmitButton>
            </div>
          </form>
        </div>
      </div>
      <NavigationBar />
    </>
  );
};

export default Login;
