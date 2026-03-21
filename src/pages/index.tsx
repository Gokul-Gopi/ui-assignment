import ConfirmOTP from "@/components/home/ConfirmOTP";
import OTPVerificaton from "@/components/home/OTPVerificaton";
import SelectAccountType from "@/components/home/SelectAccountType";
import Username from "@/components/home/Username";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>Create your account</title>
        <meta
          name="description"
          content="Follow the steps to create your account"
        />
      </Head>

      {/* <SelectAccountType /> */}
      {/* <OTPVerificaton /> */}
      {/* <ConfirmOTP /> */}
      <Username />
    </>
  );
};

export default Page;
