import OTPInput from "@/components/form/OTPInput";
import FormHeader from "./FormHeader";
import { FormProvider, useForm } from "react-hook-form";
import FormButtons from "./FormButtons";
import { otpSchema, TOTPSchema } from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";

const ConfirmOTP = () => {
  const form = useForm<TOTPSchema>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log({ data });
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="flex flex-1 flex-col">
        <FormHeader title="OTP Verification" />

        <div className="flex flex-col items-center gap-4 lg:w-fit">
          <OTPInput
            label="An OTP has been sent to your mobile number"
            required
            name="otp"
            className="items-center"
          />

          <div className="flex items-center gap-1 lg:ml-auto">
            <p className="text-sm">Didn't receive the OTP?</p>
            <Button variant="link" className="px-0">
              Resend OTP
            </Button>
          </div>
        </div>

        <FormButtons />
      </form>
    </FormProvider>
  );
};

export default ConfirmOTP;
