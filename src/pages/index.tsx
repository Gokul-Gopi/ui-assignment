import SelectAccountType from "@/components/home/SelectAccountType";
import React from "react";

const Page = () => {
  return (
    <>
      <head>
        <title>Create your account</title>
        <meta
          name="description"
          content="Follow the steps to create your account"
        />
      </head>

      <SelectAccountType />
    </>
  );
};

export default Page;
