import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/InputOTP";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/utils/helpers";

interface IOTPInputProps {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
}

const OTPInput = ({ label, required, name, className }: IOTPInputProps) => {
  const form = useFormContext();
  const errorMessage = form.formState.errors[name]?.message as
    | string
    | undefined;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label htmlFor="otp" className="text-label mb-1 text-sm">
        {label}
        {required && <span className="text-[#FF7C52]">*</span>}
      </label>

      <Controller
        name={name}
        control={form.control}
        render={({ field: { value, onChange, onBlur } }) => (
          <InputOTP
            maxLength={4}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          >
            <InputOTPGroup className="gap-4 md:gap-14">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      {errorMessage && (
        <p className="text-destructive text-sm" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default OTPInput;
