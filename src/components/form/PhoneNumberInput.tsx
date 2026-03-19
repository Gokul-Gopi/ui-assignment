import { useFormContext, Controller } from "react-hook-form";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/Combobox";
import { Input } from "@/components/ui/Input";
import { cn, COUNTRY_CODES } from "@/utils/helpers";
import { useCallback } from "react";
import Image from "next/image";

interface IPhoneValue {
  countryCode: string;
  number: string;
}

const defaultPhoneValue: IPhoneValue = {
  countryCode: "+91",
  number: "",
};

interface IPhoneNumberInputProps {
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

interface IInnerInputProps {
  name: string;
  value: IPhoneValue;
  onChange: (v: IPhoneValue) => void;
  onBlur?: () => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const InnerInput = ({
  name,
  value,
  onChange,
  onBlur,
  disabled,
  placeholder = "8343989239",
  className,
}: IInnerInputProps) => {
  const countryCode = value?.countryCode ?? defaultPhoneValue.countryCode;
  const number = value?.number ?? defaultPhoneValue.number;

  const handleCountryChange = useCallback(
    (newCode: string | null) => {
      if (newCode != null) {
        onChange({ ...value, countryCode: newCode });
      }
    },
    [value, onChange],
  );

  const handleNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value.replace(/\D/g, "").slice(0, 15);
      onChange({ ...value, number: next });
    },
    [value, onChange],
  );

  return (
    <div className={cn("flex items-center gap-2 max-md:flex-col", className)}>
      <Combobox
        items={COUNTRY_CODES}
        value={countryCode}
        onValueChange={handleCountryChange}
        disabled={disabled}
      >
        <ComboboxInput className="w-24 max-md:w-full" />
        <ComboboxContent sideOffset={10}>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.value} value={item.value}>
                <Image
                  src={item.flag}
                  alt={item.label}
                  width={20}
                  height={20}
                />{" "}
                {item.value}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>

      <Input
        id={`${name}-number`}
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        placeholder={placeholder}
        value={number}
        onChange={handleNumberChange}
        onBlur={onBlur}
        disabled={disabled}
        className="md:flex-1"
        aria-label="Phone number"
      />
    </div>
  );
};

const PhoneNumberInput = ({
  name,
  label = "Mobile Number",
  required,
  placeholder,
  disabled,
  className,
}: IPhoneNumberInputProps) => {
  const form = useFormContext();
  const error = form.formState.errors[name] as
    | {
        countryCode?: { message?: string };
        number?: { message?: string };
        message?: string;
      }
    | undefined;

  const errorMessage =
    error?.countryCode?.message || error?.number?.message || error?.message;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label htmlFor={`${name}-number`} className="text-label text-sm">
        {label}
        {required && <span className="text-[#FF7C52]">*</span>}
      </label>

      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <InnerInput
            name={name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            disabled={disabled}
            placeholder={placeholder}
          />
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

export default PhoneNumberInput;
