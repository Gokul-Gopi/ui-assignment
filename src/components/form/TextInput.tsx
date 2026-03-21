import { useController } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Field, FieldError, FieldLabel } from "@/components/ui/Field";
import { cn } from "@/utils/helpers";

interface TextInputProps extends React.ComponentProps<typeof Input> {
  name: string;
  label?: string;
}

const TextInput = ({
  name,
  label,
  required,
  className,
  ...props
}: TextInputProps) => {
  const { field, fieldState } = useController({
    name,
  });

  return (
    <Field data-invalid={fieldState.invalid} className="gap-1">
      <FieldLabel htmlFor={name} className="text-label text-lg font-normal">
        {label} {required && <span className="text-[#FF7C52]">*</span>}
      </FieldLabel>
      <Input
        {...field}
        id={name}
        aria-invalid={fieldState.invalid}
        {...props}
        className={cn("text-base!", className)}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
};

export default TextInput;
