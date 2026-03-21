import FormHeader from "./FormHeader";
import { FormProvider, useForm } from "react-hook-form";
import FormButtons from "./FormButtons";
import {
  createPasswordSchema,
  TCreatePasswordSchema,
} from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordInput from "@/components/form/PasswordInput";
import AccountSuccessDialog from "./AccountSuccessDialog";
import { useState } from "react";

const CreatePassword = () => {
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const form = useForm<TCreatePasswordSchema>({
    resolver: zodResolver(createPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log({ data });
    form.reset();
    setSuccessDialogOpen(true);
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="flex flex-1 flex-col">
        <FormHeader title="Create Password for your account" />

        <div className="flex flex-col gap-4 xl:pr-20">
          <PasswordInput
            name="password"
            label="Enter new password"
            required
            description="Must be atleast 6 characters"
          />

          <PasswordInput
            name="confirmPassword"
            label="Confirm Password"
            required
            description="Both passwords must match"
          />
        </div>

        <FormButtons />
      </form>

      <AccountSuccessDialog
        open={successDialogOpen}
        onOpenChange={setSuccessDialogOpen}
      />
    </FormProvider>
  );
};

export default CreatePassword;
