import PhoneInput from "@/components/form/PhoneNumberInput";
import FormHeader from "./FormHeader";
import { FormProvider, useForm } from "react-hook-form";
import FormButtons from "./FormButtons";
import {
  phoneNumberSchema,
  TPhoneNumberSchema,
} from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useOnBoardingStore from "@/store";

const OTPVerificaton = () => {
  const step = useOnBoardingStore((state) => state.step);
  const setStep = useOnBoardingStore((state) => state.setStep);
  const setOnBoardingData = useOnBoardingStore(
    (state) => state.setOnBoardingData,
  );

  const phoneNumber = useOnBoardingStore((state) => state.phoneNumber);

  const form = useForm<TPhoneNumberSchema>({
    resolver: zodResolver(phoneNumberSchema),
    defaultValues: {
      phone: phoneNumber,
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    setOnBoardingData({ phoneNumber: data.phone });
    setStep(step + 1);
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="flex flex-1 flex-col">
        <FormHeader title="OTP Verification" />

        <PhoneInput name="phone" required className="xl:pr-20" />

        <FormButtons />
      </form>
    </FormProvider>
  );
};

export default OTPVerificaton;
