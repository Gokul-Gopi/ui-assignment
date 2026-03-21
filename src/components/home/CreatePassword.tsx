import FormHeader from "./FormHeader";
import { FormProvider, useForm } from "react-hook-form";
import FormButtons from "./FormButtons";
import {
  createPasswordSchema,
  TCreatePasswordSchema,
} from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordInput from "@/components/form/PasswordInput";

const CreatePassword = () => {
  const form = useForm<TCreatePasswordSchema>({
    resolver: zodResolver(createPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log({ data });
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="flex flex-1 flex-col">
        <FormHeader title="Create Password for your account" />

        <div className="flex flex-col gap-4">
          <PasswordInput name="password" label="Enter new password" required />

          <PasswordInput
            name="confirmPassword"
            label="Confirm Password"
            required
          />
        </div>

        <FormButtons />
      </form>
    </FormProvider>
  );
};

export default CreatePassword;
