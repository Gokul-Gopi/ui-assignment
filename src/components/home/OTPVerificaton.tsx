import PhoneInput from "@/components/form/PhoneNumberInput";
import FormHeader from "./FormHeader";
import { FormProvider, useForm } from "react-hook-form";

const OTPVerificaton = () => {
  const form = useForm();

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="flex flex-1 flex-col">
        <FormHeader title="OTP Verification" />

        <PhoneInput name="phone" required />
      </form>
    </FormProvider>
  );
};

export default OTPVerificaton;
