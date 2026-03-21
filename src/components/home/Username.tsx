import FormHeader from "./FormHeader";
import { FormProvider, useForm } from "react-hook-form";
import FormButtons from "./FormButtons";
import { TUsernameSchema, usernameSchema } from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/components/form/TextInput";

const Username = () => {
  const form = useForm<TUsernameSchema>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log({ data });
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="flex flex-1 flex-col">
        <FormHeader title="What is your name?" />

        <div className="flex flex-col gap-4 xl:pr-20">
          <TextInput name="firstName" label="First Name" required />

          <TextInput name="lastName" label="Last Name" required />
        </div>

        <FormButtons />
      </form>
    </FormProvider>
  );
};

export default Username;
