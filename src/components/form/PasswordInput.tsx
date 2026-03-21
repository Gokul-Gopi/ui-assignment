import { useController } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/Field";
import { cn } from "@/utils/helpers";
import { InputGroup, InputGroupAddon } from "@/components/ui/InputGroup";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

interface PasswordInputProps extends React.ComponentProps<typeof Input> {
  name: string;
  description?: string;
  label?: string;
}

const PasswordInput = ({
  name,
  description,
  label,
  placeholder,
  required,
  className,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const { field, fieldState } = useController({
    name,
  });

  return (
    <Field data-invalid={fieldState.invalid} className="gap-1">
      <FieldLabel htmlFor={name} className="text-label text-lg font-normal">
        {label} {required && <span className="text-[#FF7C52]">*</span>}
      </FieldLabel>

      <InputGroup className="bg-white!">
        <Input
          type={showPassword ? "text" : "password"}
          {...field}
          id={name}
          aria-invalid={fieldState.invalid}
          {...props}
          className={cn("border-0 text-base! focus-visible:ring-0", className)}
        />
        <InputGroupAddon align="inline-end" className="bg-white pr-8">
          {showPassword ? (
            <EyeIcon
              className="text-primary size-6 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <EyeOffIcon
              className="text-primary size-6 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </InputGroupAddon>
      </InputGroup>

      {fieldState.invalid ? (
        <FieldError errors={[fieldState.error]} />
      ) : (
        description && (
          <FieldDescription className="text-label text-base">
            {description}
          </FieldDescription>
        )
      )}
    </Field>
  );
};

export default PasswordInput;
