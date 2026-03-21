import FormHeader from "./FormHeader";
import { FormProvider, useForm } from "react-hook-form";
import FormButtons from "./FormButtons";
import { TUsernameSchema, usernameSchema } from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/components/form/TextInput";
import useOnBoardingStore from "@/store";

const Username = () => {
  const step = useOnBoardingStore((state) => state.step);
  const setStep = useOnBoardingStore((state) => state.setStep);
  const setOnBoardingData = useOnBoardingStore(
    (state) => state.setOnBoardingData,
  );
  const username = useOnBoardingStore((state) => state.username);

  const form = useForm<TUsernameSchema>({
    resolver: zodResolver(usernameSchema),
    defaultValues: username,
  });

  const onSubmit = form.handleSubmit((data) => {
    setOnBoardingData({ username: data });
    setStep(step + 1);
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="flex flex-1 flex-col">
        <FormHeader title="What is your name?" />

        <div className="flex flex-col gap-4 xl:pr-20">
          <TextInput
            name="firstName"
            label="First Name"
            placeholder="First Name"
            required
          />

          <TextInput
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
            required
          />
        </div>

        {/* -2 because we are going back to the OTP verification step */}
        <FormButtons onBack={() => setStep(step - 2)} />
      </form>
    </FormProvider>
  );
};

export default Username;
