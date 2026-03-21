import ConfirmOTP from "@/components/home/ConfirmOTP";
import CreatePassword from "@/components/home/CreatePassword";
import OTPVerificaton from "@/components/home/OTPVerificaton";
import SelectAccountType from "@/components/home/SelectAccountType";
import Username from "@/components/home/Username";
import useOnBoardingStore from "@/store";
import Head from "next/head";

const Page = () => {
  const step = useOnBoardingStore((state) => state.step);

  return (
    <>
      <Head>
        <title>Create your account</title>
        <meta
          name="description"
          content="Follow the steps to create your account"
        />
      </Head>

      {step === 1 && <SelectAccountType />}
      {step === 2 && <OTPVerificaton />}
      {step === 3 && <ConfirmOTP />}
      {step === 4 && <Username />}
      {step === 5 && <CreatePassword />}
    </>
  );
};

export default Page;
