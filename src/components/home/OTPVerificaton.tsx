import PhoneInput from "@/components/form/PhoneNumberInput";
import FormHeader from "./FormHeader";
import { FormProvider, useForm } from "react-hook-form";
import FormButtons from "./FormButtons";
import {
  phoneNumberSchema,
  TPhoneNumberSchema,
} from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const OTPVerificaton = () => {
  const form = useForm<TPhoneNumberSchema>({
    resolver: zodResolver(phoneNumberSchema),
    defaultValues: {
      phone: {
        countryCode: "+91",
        number: "",
      },
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log({ data });
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="flex flex-1 flex-col">
        <FormHeader title="OTP Verification" />

        <PhoneInput name="phone" required />

        <FormButtons />
      </form>
    </FormProvider>
  );
};

export default OTPVerificaton;
