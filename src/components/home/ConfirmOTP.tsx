import OTPInput from "@/components/form/OTPInput";
import FormHeader from "./FormHeader";
import { FormProvider, useForm } from "react-hook-form";
import FormButtons from "./FormButtons";
import { otpSchema, TOTPSchema } from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { useEffect, useRef, useState } from "react";
import { formatTime } from "@/utils/helpers";
import { toast } from "sonner";

const RESEND_OTP_TIME = 60;

const ConfirmOTP = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [resendOtpTime, setResendOtpTime] = useState(RESEND_OTP_TIME);

  const form = useForm<TOTPSchema>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const formattedTime = formatTime(resendOtpTime);

  const onSubmit = form.handleSubmit((data) => {
    console.log({ data });
  });

  const onResendOtp = () => {
    toast.success("OTP has been sent to your mobile number");
    setResendOtpTime(RESEND_OTP_TIME);
  };

  useEffect(() => {
    if (resendOtpTime <= 0) return;

    timeoutRef.current = setTimeout(() => {
      setResendOtpTime(resendOtpTime - 1);
    }, 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [resendOtpTime]);

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="flex flex-1 flex-col">
        <FormHeader title="OTP Verification" />

        <div className="flex flex-col gap-4 max-lg:items-center lg:w-fit">
          <OTPInput
            label="An OTP has been sent to your mobile number"
            required
            name="otp"
            className="max-lg:items-center"
          />

          <div className="flex items-center gap-1 lg:ml-auto">
            <p className="text-sm">Didn't receive the OTP?</p>
            <Button
              type="button"
              variant="link"
              className="px-0"
              // disabled={resendOtpTime > 0}
              onClick={onResendOtp}
            >
              Resend OTP {resendOtpTime > 0 ? `in ${formattedTime}s` : null}
            </Button>
          </div>
        </div>

        <FormButtons />
      </form>
    </FormProvider>
  );
};

export default ConfirmOTP;
