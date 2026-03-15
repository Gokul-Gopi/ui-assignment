import OTPVerificaton from "@/components/home/OTPVerificaton";
import SelectAccountType from "@/components/home/SelectAccountType";
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
      <OTPVerificaton />
    </>
  );
};

export default Page;
